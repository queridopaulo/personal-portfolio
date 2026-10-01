# Paulo Querido — Engineering Portfolio

Personal résumé and portfolio website for Paulo Querido, a backend software engineer moving toward AI and LLM platform infrastructure.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

The site is statically exported and can be hosted without a server runtime.

```bash
npm run build
```

The generated site is written to `out/`.

For a project site hosted below a URL path, set the path at build time:

```bash
NEXT_PUBLIC_BASE_PATH=/personal-portfolio npm run build
```

## Content

Résumé content is kept separately from presentation in `app/data/resume.ts`. Experience, projects, education, certifications, skills, homelab details, and contact links can be updated there.

The downloadable résumé and visual assets live in `public/`.

## Attribution

This website was developed with AI assistance. All professional information, editorial decisions, and final content were reviewed and approved by Paulo Querido.
