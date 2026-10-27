# Ranindu Amarasinghe — Portfolio

Personal portfolio built with Next.js and Sanity.

## Getting started

Run `npm install`, add the required Sanity values to `.env.local`, then run `npm run dev`.

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` — Sanity dataset
- `NEXT_PUBLIC_SANITY_API_VERSION` — optional API version

Open [http://localhost:3000](http://localhost:3000) to view the site. Sanity Studio is available at `/studio`.

## Commands

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run lint` — run ESLint

## MacNest download and email setup

The MacNest download form uses Resend for a single transactional thank-you email and Upstash Redis for server-side rate limiting and request idempotency. Email addresses are not stored in Redis; only short-lived hashes, request status, and rate-limit counters are kept. The flow does not subscribe visitors to marketing email.

Use `.env.example` as a reference and add the server-only values below to `.env.local` (preserving any existing project variables):

- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` — create an Upstash Redis database and copy its HTTPS REST endpoint and token from the database console. Both are required before the download API accepts requests.
- `RESEND_API_KEY` — create a Resend API key with permission to send email.
- `EMAIL_FROM` — set a sender such as `Ranindu <downloads@your-verified-domain.example>` only after verifying that domain in Resend. Add the sender domain in Resend, publish the DNS records Resend provides, and wait until the dashboard reports it verified. Do not use an address you do not control or a domain that Resend has not verified.
- `MACNEST_DOWNLOAD_URL` — optional. Defaults to `/downloads/MacNest_1.0.1_aarch64.dmg`, which is the DMG currently in `public/downloads`. For a release-hosted installer, use a stable HTTPS URL that points directly to the current DMG; this is the one configuration location used by the API and email.
- `MACNEST_GITHUB_URL` — optional; defaults to the existing verified MacNest repository.
- `SITE_URL` — optional; defaults to `https://ranindu.dev`. Set this to the canonical HTTPS portfolio origin used for email links.

The endpoint validates the email before recording a request, limits each IP hash to five accepted submissions per 15 minutes, and prevents retries from sending duplicate email by using a request idempotency key with both Redis and Resend. A successful download remains available if email delivery fails. Until Upstash is configured, the endpoint returns a recoverable service error and does not accept the request. If Resend or its sender is not configured, a validated request can still receive the DMG, and the dialog reports that its email could not be sent.

The “Ready to explore MacNest?” action at the end of the installation guide remains a direct download for visitors who have finished the setup instructions. It uses `/macnest/download`, which redirects to the same configured DMG URL. The hero and other download buttons continue to use the email flow.

### Local verification

1. Configure the Upstash variables and, when testing email, a Resend key plus a verified `EMAIL_FROM` sender in `.env.local`.
2. Run `npm run dev` and open `/macnest`.
3. Submit an address you are authorized to test. No real recipient is contacted by the build or lint checks; a successful local submission sends the same transactional message through your configured Resend account.
4. Check the Resend dashboard for the message result and confirm the DMG starts downloading. To test provider failure safely, temporarily omit `RESEND_API_KEY` while leaving Upstash configured; the download should still be returned and the dialog should disclose the email failure.

### Vercel deployment

Add `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `RESEND_API_KEY`, and `EMAIL_FROM` to the Vercel project’s Environment Variables for Preview/Production as appropriate. Add `SITE_URL` and any non-default release URL values if needed. Keep all of these server-side: none should use a `NEXT_PUBLIC_` prefix. Redeploy after changing environment values. To publish a new MacNest release, upload the DMG to the chosen stable HTTPS release location and update only `MACNEST_DOWNLOAD_URL` in the target environment. Verify a download from `/macnest`, the resulting file, and the message status in Resend before announcing the deployment.

Production email delivery is not active until the Upstash database, Resend API key, verified sender identity, environment variables, and deployed endpoint have been configured and exercised.
