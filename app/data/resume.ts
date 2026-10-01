export type Link = {
  label: string;
  href: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  domains: string[];
  technologies: string[];
  details: {
    projects: string[];
    architecture: string[];
    responsibilities: string[];
    outcomes: string[];
    context: string[];
  };
};

export type Project = {
  name: string;
  description: string;
  problem: string;
  decisions: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  screenshots?: string[];
  details?: string[];
};

export type Education = {
  degree: string;
  school: string;
  start: string;
  end: string;
};

export type Certification = {
  name: string;
  issuer: string;
  status: "expired";
};

export type Homelab = {
  summary: string;
  architecture: string[];
  hardware: string[];
  networking: string[];
  platform: string[];
  services: string[];
  monitoring: string[];
  automation: string[];
  experiments: string[];
  media: { label: string; src: string; type: "image" | "diagram" }[];
};

export const resumeData = {
  person: {
    name: "Paulo Querido",
    role: "Backend Software Engineer",
    location: "Lisbon, Portugal",
    email: "querido.paulo@gmail.com",
    positioning:
      "I build distributed backend systems and the production infrastructure around them. My next chapter is AI and LLM platform engineering — applying that foundation to reliable, observable systems that put models into production.",
    links: {
      github: { label: "GitHub", href: "https://github.com/queridopaulo" },
      linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/pauloquerido" },
      resume: { label: "Download résumé", href: `${basePath}/Paulo-Querido-Resume.pdf` },
    },
  },
  focus: [
    { label: "Foundation", value: "Distributed backends" },
    { label: "Production", value: "Cloud & infrastructure" },
    { label: "Direction", value: "AI / LLM platforms" },
  ],
  experience: [
    {
      company: "tb.lx by Daimler Truck",
      role: "Backend Engineer",
      start: "Oct 2022",
      end: "Present",
      summary:
        "Developing digital products for electric-vehicle charging stations within a product team, across RESTful and GraphQL microservice architectures.",
      domains: ["EV charging", "Product engineering", "Microservices"],
      technologies: ["Kotlin", "Java", "Spring Boot", "Kubernetes", "Kafka", "PostgreSQL", "MongoDB", "Azure"],
      details: {
        projects: [],
        architecture: ["RESTful and GraphQL microservices"],
        responsibilities: ["Design and maintenance of backend services"],
        outcomes: [],
        context: ["Product team building digital solutions for electric-vehicle charging stations"],
      },
    },
    {
      company: "Capgemini Portugal",
      role: "Software Engineer",
      start: "Dec 2021",
      end: "Oct 2022",
      summary:
        "Maintained client projects in insurance and banking, developing new features and supporting ongoing initiatives.",
      domains: ["Insurance", "Banking", "Client delivery"],
      technologies: ["ASP.NET 1.1", ".NET Framework", "SQL"],
      details: {
        projects: [],
        architecture: [],
        responsibilities: ["Project maintenance", "Feature development", "Initiative support"],
        outcomes: [],
        context: ["Insurance and banking clients"],
      },
    },
    {
      company: "NOS Inovação (BOLD by Devoteam)",
      role: "Software Engineer",
      start: "Jan 2021",
      end: "Dec 2021",
      summary:
        "Worked in a microservice environment at a major Portuguese telecom, building services that support end-user products.",
      domains: ["Telecommunications", "Microservices", "Production systems"],
      technologies: ["C#", ".NET Core", "JavaScript", "Node.js", "Jenkins", "Docker", "Kubernetes", "MongoDB", "Redis", "Kafka", "Prometheus", "Grafana"],
      details: {
        projects: [],
        architecture: ["Microservices forming the backend of end-user products"],
        responsibilities: ["Architecture", "Development", "Unit testing", "Deployment"],
        outcomes: [],
        context: ["Integrated into the microservice development environment of one of Portugal's largest telecom companies"],
      },
    },
    {
      company: "Card4B — Systems S.A.",
      role: "Curricular Internship — Master's Thesis",
      start: "Oct 2019",
      end: "Oct 2020",
      summary:
        "Developed a blockchain-based public-transport ticketing solution, an identity-management module and a MaaS traveller application mock-up.",
      domains: ["Public transport", "Identity", "Academic research"],
      technologies: ["JavaScript", "Express.js", "Node.js", "Hyperledger", "Docker", "CouchDB", "OpenID Connect"],
      details: {
        projects: ["Blockchain-based ticketing solution", "Passenger identity-management module", "MaaS application mock-up"],
        architecture: ["Hyperledger-based system with CouchDB and OpenID Connect"],
        responsibilities: ["Solution development as part of the master's thesis"],
        outcomes: [],
        context: ["Historical academic and early-career work"],
      },
    },
  ] satisfies Experience[],
  projects: [] as Project[],
  education: [
    {
      degree: "Master of Science in Software Architecture",
      school: "Faculdade de Ciências da Universidade de Lisboa",
      start: "2017",
      end: "2020",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Faculdade de Ciências da Universidade de Lisboa",
      start: "2013",
      end: "2018",
    },
  ] satisfies Education[],
  homelab: {
    summary:
      "A private engineering environment for infrastructure, automation and future AI-systems experiments. Technical documentation will be added as the architecture is prepared for publication.",
    architecture: [],
    hardware: [],
    networking: [],
    platform: [],
    services: [],
    monitoring: [],
    automation: [],
    experiments: [],
    media: [],
  } satisfies Homelab,
  certifications: [
    { name: "Cloud Digital Leader", issuer: "Google Cloud Platform", status: "expired" },
    { name: "Associate Cloud Engineer", issuer: "Google Cloud Platform", status: "expired" },
  ] satisfies Certification[],
  skills: {
    Languages: ["Kotlin", "Java", "C#", "JavaScript", "SQL", "Python", "Scala"],
    Backend: ["Spring Boot", ".NET Core", "Node.js", "Express.js", "REST", "GraphQL", "Microservices", "Kafka"],
    Infrastructure: ["Docker", "Kubernetes", "Jenkins", "Azure DevOps", "Prometheus", "Grafana"],
    Data: ["PostgreSQL", "MongoDB", "Redis", "CouchDB", "Oracle SQL", "Neo4j"],
    Cloud: ["Azure", "Google Cloud"],
    "AI direction": ["LLM platforms", "Inference infrastructure", "Production AI systems"],
  },
};

export type ResumeData = typeof resumeData;
