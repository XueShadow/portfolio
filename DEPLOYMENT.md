# Deployment Guide

## Cloudflare Pages Deployment

This project is configured to deploy to **Cloudflare Pages**. GitHub Pages cannot host this application because TanStack Start requires a server runtime.

### Setup Instructions

1. **Create a Cloudflare Account** (if you don't have one)
   - Go to [cloudflare.com](https://www.cloudflare.com)

2. **Get Your Cloudflare Credentials**
   - Account ID: Found in Cloudflare dashboard (Account Home > Right sidebar)
   - API Token: Create a new token in [User Settings > API Tokens](https://dash.cloudflare.com/profile/api-tokens)
     - Use the "Edit Cloudflare Workers" template as a starting point
     - Add permissions for `Account.Pages` scope

3. **Add GitHub Secrets**
   - Go to your repository on GitHub
   - Settings > Secrets and variables > Actions
   - Add these secrets:
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API Token

4. **Push Changes**
   ```bash
   git push origin main
   ```
   The GitHub Actions workflow will automatically build and deploy to Cloudflare Pages.

5. **Verify Deployment**
   - Check GitHub Actions tab for workflow status
   - Once deployed, your site will be available at: `https://<project-name>.pages.dev`
   - Or at your custom domain if configured

## Local Deployment

To deploy manually from your local machine:

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist/client
```

## Current Configuration

- **Framework**: TanStack Start
- **Build Output**: `dist/client`
- **Server Entry**: `src/server.ts`
- **Base Path**: `/portfolio/`

For more information, see [TanStack Start Documentation](https://tanstack.com/start/latest)
