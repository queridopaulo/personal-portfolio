"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Experience, Homelab, Project, ResumeData } from "../data/resume";

const Arrow = () => <span aria-hidden="true">↗</span>;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function RevealSetup() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}

function SectionHeading({ number, label, title, intro }: { number: string; label: string; title: string; intro?: string }) {
  return (
    <header className="section-heading" data-reveal>
      <p className="eyebrow"><span>{number}</span>{label}</p>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}

function DetailGroup({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="detail-group">
      <h4>{label}</h4>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

function ExperienceEntry({ item, index }: { item: Experience; index: number }) {
  const hasDetails = Object.values(item.details).some((items) => items.length);
  return (
    <article className="experience-item" data-reveal style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
      <div className="experience-date"><span>{item.start}</span><span>{item.end}</span></div>
      <div className="timeline-marker" aria-hidden="true"><span /></div>
      <div className="experience-content">
        <p className="company">{item.company}</p>
        <h3>{item.role}</h3>
        <p className="summary">{item.summary}</p>
        <div className="tags compact">{item.domains.map((domain) => <span key={domain}>{domain}</span>)}</div>
        {hasDetails && (
          <details className="details-panel">
            <summary><span>More details</span><i aria-hidden="true">+</i></summary>
            <div className="details-inner">
              <div className="detail-grid">
                <DetailGroup label="Projects" items={item.details.projects} />
                <DetailGroup label="Architecture" items={item.details.architecture} />
                <DetailGroup label="Responsibilities" items={item.details.responsibilities} />
                <DetailGroup label="Outcomes" items={item.details.outcomes} />
                <DetailGroup label="Context" items={item.details.context} />
              </div>
              <div className="technology-list" aria-label="Technologies used">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
          </details>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-topline"><span>Case study</span><span>Public project</span></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-facts"><strong>Why it exists</strong><p>{project.problem}</p></div>
      <div className="technology-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}
      </div>
      {project.details?.length ? (
        <details className="details-panel project-details">
          <summary><span>View details</span><i aria-hidden="true">+</i></summary>
          <div className="details-inner"><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
        </details>
      ) : null}
    </article>
  );
}

const homelabLabels: Record<Exclude<keyof Homelab, "summary" | "media">, string> = {
  architecture: "Architecture",
  hardware: "Hardware",
  networking: "Networking",
  platform: "Containers / Kubernetes",
  services: "Self-hosted services",
  monitoring: "Monitoring",
  automation: "Automation",
  experiments: "Experiments",
};

export function PortfolioSite({ data }: { data: ResumeData }) {
  const { person } = data;
  const populatedLabSections = Object.entries(homelabLabels).filter(([key]) => data.homelab[key as keyof typeof homelabLabels].length);

  return (
    <>
      <RevealSetup />
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Paulo Querido, back to top">PQ</a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#homelab">Homelab</a>
        </nav>
        <a className="header-contact" href={`mailto:${person.email}`}>Let’s talk <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy" data-reveal>
            <p className="availability"><span /> Lisbon, Portugal · Open to ambitious engineering problems</p>
            <p className="hero-kicker">{person.role}</p>
            <h1>{person.name}</h1>
            <p className="hero-statement">{person.positioning}</p>
            <div className="hero-actions">
              <a className="primary-button" href={person.links.resume.href} download>Download résumé <span aria-hidden="true">↓</span></a>
              <a href={`mailto:${person.email}`}>Email <Arrow /></a>
              <a href={person.links.linkedin.href} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href={person.links.github.href} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </div>
          </div>
          <aside className="hero-portrait" aria-label="Portrait of Paulo Querido" data-reveal>
            <div className="portrait-index"><span>Profile / 01</span><span>Lisbon, PT</span></div>
            <div className="portrait-window">
              <Image
                src={`${basePath}/hero-portrait.png`}
                alt="Illustrated portrait of Paulo Querido"
                fill
                priority
                sizes="(max-width: 780px) 100vw, 38vw"
              />
              <div className="portrait-status"><i aria-hidden="true" /><span>Backend engineer<br />AI infrastructure direction</span></div>
            </div>
            <div className="portrait-focus" aria-label="Engineering focus">
              {data.focus.map((item) => (
                <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>
              ))}
            </div>
          </aside>
        </section>

        <div className="capability-strip" aria-label="Core technologies">
          <div className="capability-track">
            {[0, 1].map((copy) => (
              <div className="capability-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
                <span>Kotlin</span><i /> <span>Java</span><i /> <span>Spring</span><i /> <span>Kafka</span><i /> <span>Kubernetes</span><i /> <span>PostgreSQL</span><i /> <span>Azure</span><i />
              </div>
            ))}
          </div>
        </div>

        <section className="section-shell content-section" id="experience">
          <SectionHeading number="01" label="Experience" title="Systems built in the real world." intro="Production backend work across mobility, telecom, finance and insurance — shown from most recent to earliest." />
          <div className="experience-list">{data.experience.map((item, index) => <ExperienceEntry key={`${item.company}-${item.start}`} item={item} index={index} />)}</div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <SectionHeading number="02" label="Selected projects" title="Engineering, made inspectable." intro="Public work and deep technical case studies will live here — with the problem, trade-offs and implementation visible, not just a technology list." />
            {data.projects.length ? (
              <div className="projects-grid">{data.projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
            ) : (
              <div className="projects-empty" data-reveal>
                <div>
                  <p className="eyebrow">Publication queue</p>
                  <h3>Case studies are being prepared.</h3>
                  <p>No invented portfolio pieces. Public projects will appear here when they can be documented with the technical depth they deserve.</p>
                </div>
                <a href={person.links.github.href} target="_blank" rel="noreferrer">Follow the work on GitHub <Arrow /></a>
              </div>
            )}
          </div>
        </section>

        <section className="section-shell content-section" id="about">
          <SectionHeading number="03" label="Education" title="Academic foundation." />
          <div className="education-list">
            {data.education.map((item) => (
              <article key={item.degree} data-reveal>
                <p>{item.start} — {item.end}</p>
                <div><h3>{item.degree}</h3><span>{item.school}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section homelab-section" id="homelab">
          <SectionHeading number="04" label="Homelab" title="A private place to test production ideas." intro="Understated by design: the lab is not a public repository, but its architecture and experiments can become technical case studies over time." />
          <div className="homelab-panel" data-reveal>
            <div className="homelab-status"><span>Private environment</span><i>Documentation in progress</i></div>
            <p>{data.homelab.summary}</p>
            {populatedLabSections.length ? (
              <div className="homelab-grid">{populatedLabSections.map(([key, label]) => <div key={key}><h3>{label}</h3><ul>{data.homelab[key as keyof typeof homelabLabels].map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
            ) : (
              <div className="homelab-topics">{Object.values(homelabLabels).map((label) => <span key={label}>{label}</span>)}</div>
            )}
          </div>
        </section>

        <section className="section-shell content-section credentials-section">
          <SectionHeading number="05" label="Credentials" title="Previously held certifications." />
          <div className="certification-grid">
            {data.certifications.map((item) => (
              <article key={item.name} data-reveal>
                <span>GCP</span><div><p>{item.issuer}</p><h3>{item.name}</h3><small>Previously certified — credential expired</small></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section skills-section">
          <SectionHeading number="06" label="Technical index" title="A compact working set." intro="Tools are listed last on purpose. The experience above is the evidence." />
          <div className="skills-grid">
            {Object.entries(data.skills).map(([group, items]) => (
              <div key={group} data-reveal><h3>{group}</h3><p>{items.join(" · ")}</p></div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="section-shell contact-inner" data-reveal>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build difficult systems well.</h2>
            <p>Interested in backend, infrastructure and AI-platform engineering roles where production quality matters.</p>
            <div className="contact-links">
              <a className="primary-button light" href={`mailto:${person.email}`}>{person.email} <Arrow /></a>
              <a href={person.links.linkedin.href} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href={person.links.github.href} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Paulo Querido</span><span>Backend systems → AI infrastructure</span><span>Lisbon · {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
