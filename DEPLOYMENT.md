# Deployment Guide

This website can be deployed to various platforms. Here are the instructions:

## Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository: `abubakar10/home-tuitions`
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"
7. Your site will be live in minutes!

**Configuration is already set up in `vercel.json`**

## Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select your repository: `abubakar10/home-tuitions`
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Configuration is already set up in `netlify.toml`**

## Option 3: GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow is already configured in `.github/workflows/deploy.yml`
5. Push any changes to trigger automatic deployment

Or manually:
1. Build the project: `npm run build`
2. The `dist` folder contains all static files
3. Upload the contents of `dist` to GitHub Pages

## Option 4: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains all production-ready files
3. Upload the contents of `dist` to any web hosting service:
   - Any web hosting provider (cPanel, FTP, etc.)
   - AWS S3 + CloudFront
   - Azure Static Web Apps
   - Google Cloud Storage

## Build Commands

- Development: `npm run dev`
- Production Build: `npm run build`
- Preview Build: `npm run preview`

## Important Notes

- The `dist` folder is generated during build and contains optimized, minified files
- All routes are configured to work with client-side routing
- The site is fully static and can be hosted on any static hosting service

