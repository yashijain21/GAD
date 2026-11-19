# SendGrid appointment email setup

The home popup, home appointment form, and contact page form send JSON to the Vercel function at `/api/appointments`. The function calls SendGrid's Mail Send API on the server, so the API key is never included in browser code. Appointment requests are sent to `prvndr4@gmail.com` by default.

## Configure SendGrid

1. Create a SendGrid account and verify a sender identity. For initial testing, SendGrid's Single Sender Verification can use an inbox you control and does not require owning a custom domain. Complete the verification link sent to that inbox.
2. In SendGrid, create an API key with **Mail Send** permission. Copy it once and keep it private.
3. In the Vercel project, open **Settings → Environment Variables** and add:
   - `SENDGRID_API_KEY` — the secret API key
   - `SENDGRID_FROM_EMAIL` — the exact sender email address verified in SendGrid
   - `APPOINTMENTS_TO_EMAIL` — `prvndr4@gmail.com` (optional; this is the default)
4. Apply the variables to the deployment environment and redeploy the project. Vercel functions only receive updated environment variables after redeployment.
5. Submit a test appointment and confirm it arrives at the clinic inbox. Check the Vercel function logs if the form reports that it could not send.

Do not commit real credentials to the repository or put them in frontend environment variables. `.env.example` contains placeholders only. SendGrid may require domain authentication before production-scale sending; the no-domain single-sender option is suitable for initial testing, with deliverability and account limits controlled by SendGrid.

## Current limitation

The endpoint validates required fields and includes a hidden honeypot for basic spam filtering. Actual delivery cannot start until the SendGrid API key and verified sender are added in Vercel.
