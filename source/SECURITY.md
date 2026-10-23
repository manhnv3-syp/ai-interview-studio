# Security

Interview Studio handles résumés, job descriptions, transcripts, and potentially recordings. Keep credentials and candidate data out of public bug reports.

## Reporting a vulnerability

This source checkout does not yet have a project-owned private reporting address or repository security channel. Do not send reports to an address belonging to a different project, and do not post exploit details in a public issue. Before publishing this checkout, its maintainer should enable a private reporting channel on the chosen repository host and update this section and the issue templates with that channel.

A useful private report includes the affected component, impact, reproduction steps, and redacted logs or screenshots. Do not access, alter, or destroy data that is not yours while investigating.

## Configuration

- Keep `.env`, `.env.local`, provider keys, tokens, transcripts, and recordings out of version control. `.env.example` contains placeholders only.
- Keep `SUPABASE_SERVICE_ROLE_KEY` and other server credentials out of `NEXT_PUBLIC_*` variables and browser bundles.
- If a key was exposed, rotate it before removing the old value from published history.
- Use the mock adapters for local checks when real provider credentials are unnecessary.
