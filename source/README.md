# Interview Studio

Interview Studio is a self-hosted practice space for job interviews. It helps a candidate prepare from a résumé and job description, practice answering questions, review a score report, and study the areas that need work.

The application separates preparation, the interview, and feedback. Preparation builds a question plan from the candidate's materials. The interview interface presents the session and can connect to a real-time voice worker when voice providers are configured. Feedback summarizes strengths, gaps, and suggested next steps.

The web interface supports English and Vietnamese, while interview language packs cover additional languages. The codebase contains a Next.js web app, a Python agent API and voice worker, a knowledge service, shared data contracts, and a setup CLI.

The base application and automated tests work with local mock adapters and no provider keys. Live voice, external company research, and generated speech require the corresponding services or locally hosted models. A self-hosted installation does not require an account.

Operational instructions are in [`docs/GETTING_STARTED.md`](docs/GETTING_STARTED.md). The Vietnamese version of this overview is in [`README.vi.md`](README.vi.md).
