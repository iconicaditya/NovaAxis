# Project Overview
This is a Next.js application built with Tailwind CSS, Shadcn UI, and Framer Motion. It is optimized for performance and ready for production deployment.

## Deployment Guide: How to Host on Vercel

Since you are using Replit, the easiest way to deploy to Vercel is by connecting your GitHub repository to Vercel.

### 1. Push your code to GitHub
If you haven't already:
1. Click on the **Git** icon in the Replit sidebar.
2. Connect your GitHub account.
3. Create a new repository and push your code.

### 2. Connect to Vercel
1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New..."** and then **"Project"**.
3. Select the repository you just pushed from Replit.
4. Vercel will automatically detect that it's a Next.js project.

### 3. Configure Build Settings
The default settings should work perfectly:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

### 4. Environment Variables (If any)
If you add any secrets later (like API keys):
1. Go to the **Settings** tab of your project in Vercel.
2. Select **Environment Variables**.
3. Add the keys and values exactly as they appear in your Replit Secrets.

### 5. Deploy
Click **Deploy**. Vercel will build your project and provide you with a live URL.

## Local Development
To run the project locally in Replit:
1. The development server starts automatically via the "Next.js Dev Server" workflow.
2. Access the site at port 5000.

## Recent Changes
- **2026-01-09**: Initial setup, dependency installation, and verified production build for Vercel compatibility.