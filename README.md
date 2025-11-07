# joseph-musembi-portfolio

Joseph Musembi — Software Engineer portfolio (React, Tailwind, Vite)

---

Professional, responsive portfolio site showcasing projects, technical experience, and skills. Built with React, Vite, and Tailwind CSS and optimized for fast local development and GitHub Pages deployment.

## Live demo

If deployed to GitHub Pages the site will be available at:

`https://Joseph-the-Engineer.github.io/joseph-musembi-portfolio/`

Replace `Joseph-the-Engineer` with your GitHub username when you configure the repository.

## Key features

- Modern React + Vite stack for fast HMR and small production bundles
- Tailwind CSS utilities for responsive, accessible UI
- Data-driven pages: experience, skills, projects sourced from `src/data`
- Accessible components: keyboard-focusable controls, ARIA dialog for modals
- Print / Resume-optimized styles and a header CTA to download/print the resume
- CI workflow to build and deploy to GitHub Pages (created at `.github/workflows/deploy.yml`)

## Technology

- React 18
- Vite
- Tailwind CSS
- Framer Motion (optional motion-based UI enhancements)
- Vitest + Testing Library (unit/DOM tests)

## Project structure (high level)

- `src/` — application source
	- `pages/` — route pages (About, Experience, Projects, Skills, Contact)
	- `components/` — reusable UI components and layout
	- `data/` — content driving the pages (`experience.js`, `skills.js`, `projects.js`)
	- `assets/` — images, logos, fonts
- `public/` — static assets served by Vite
- `.github/workflows/` — CI workflow for build & deploy

## Getting started (local)

Prerequisites: Node.js (LTS) and npm. On Windows PowerShell, run:

```powershell
# install dependencies
npm ci

# start dev server (Vite)
npm run dev

# open the site at http://localhost:5173 (Vite will show the URL)
```

Common scripts (from `package.json`):

```powershell
npm run dev      # start development server with HMR
npm run build    # build production assets into dist/
npm run preview  # locally preview the production build
npm test         # run unit tests (Vitest)
```

## Tests and QA

This project uses Vitest with Testing Library for component tests. To run tests locally:

```powershell
npm test
```

If tests fail after large edits, first ensure data shapes in `src/data/*.js` are consistent with components that consume them (for example `experience.js` entries must include the fields the Experience page expects). If you need help debugging a failing test, paste the failing test output and I can help pinpoint the issue.

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and publishes the `dist/` directory to the `gh-pages` branch. To deploy:

1. Create a GitHub repository named `joseph-musembi-portfolio` (public recommended).
2. Push your local `main` branch to GitHub.
3. The workflow will run automatically on push to `main` and publish the site.

If you prefer to deploy manually, build and then push `dist/` to a branch configured for Pages:

```powershell
npm run build
# then push dist/ to your hosting flow (or use a static server)
```

## Linting, formatting, and accessibility

This project uses Tailwind CSS and follows common accessibility practices (focus states, semantic markup, ARIA where needed). Consider running an accessibility audit (Lighthouse) after deployment and tune color contrast if you customize the theme.

## Contributing

Small changes are welcome. If you plan to make larger edits:

1. Create a branch for your work
2. Run the dev server and tests locally
3. Open a PR with a description of changes and screenshots where relevant

If you'd like help setting up automated previews for PRs or configuring a custom domain on GitHub Pages, tell me and I can add the necessary workflow steps.

## Troubleshooting & notes

- If the dev server won't start, ensure no other process is listening on the port Vite attempts to use (default 5173). On Windows, use `Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess` to inspect or kill the process.
- If builds fail in Actions but succeed locally, check Node version differences and installed environment variables. The workflow uses Node 18 by default.
- If tests fail (exit code 1), paste the failing output here and I will help fix the test or the code.

## License

MIT License — see `LICENSE` file if included. If you'd like I can add an `LICENSE` file (MIT) for you.

## Contact

- Joseph Musembi — (add email or preferred contact method)
- GitHub: `https://github.com/<github-username>`

---

If you'd like, I can:

- add a prefilled `LICENSE` (MIT) file,
- create a `.gitignore` tuned for Node/Vite projects,
- craft the exact GitHub repo creation and push commands for your environment, or
- run the tests and fix any failing test cases here.

Tell me which of those you'd like next.
