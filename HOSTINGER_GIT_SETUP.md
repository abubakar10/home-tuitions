# Hostinger Git Deployment Setup

## Important: Hostinger Git Integration for React Apps

Hostinger's Git integration is designed for PHP projects by default. For React apps, you have **two options**:

## Option 1: Commit Built Files (Recommended for Hostinger)

Since Hostinger may not have Node.js build capabilities, you need to commit the `dist` folder:

### Steps:

1. **Build your React app locally:**
   ```bash
   npm run build
   ```

2. **Temporarily allow dist folder in Git:**
   - The `.gitignore` already excludes `dist`, so we need to force add it

3. **Add dist folder to Git:**
   ```bash
   git add -f dist/
   git add .htaccess
   git commit -m "Add built files for Hostinger deployment"
   git push origin main
   ```

4. **Configure Hostinger:**
   - In Hostinger Git settings, set the **deployment directory** to `dist`
   - Or set it to root and Hostinger will use the files

## Option 2: Use Build Script (If Hostinger Supports Node.js)

If Hostinger supports Node.js builds, create a build script:

1. **Create `build.sh` in your repo:**
   ```bash
   #!/bin/bash
   npm install
   npm run build
   cp -r dist/* public_html/
   cp .htaccess public_html/
   ```

2. **Configure in Hostinger:**
   - Set build command: `npm install && npm run build`
   - Set deployment directory: `dist`

## Option 3: Manual Deployment (Most Reliable)

Even with Git connected, you can manually deploy:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload via File Manager:**
   - Upload contents of `dist` folder to `public_html`
   - Upload `.htaccess` to `public_html`

## Recommended Setup for Hostinger

Since Hostinger is shared hosting, **Option 1** (committing dist) is most reliable:

1. Build locally
2. Commit dist folder
3. Push to GitHub
4. Hostinger pulls from GitHub
5. Point Hostinger to serve from `dist` folder or copy files to `public_html`

## Current Issue

If you're seeing "composer.json not found", Hostinger is looking for PHP files. You need to:

1. **Build the React app** (creates `dist` folder)
2. **Commit the `dist` folder** to Git
3. **Configure Hostinger** to serve from `dist` or copy to `public_html`

## Quick Fix

Run these commands:

```bash
# Build the app
npm run build

# Force add dist folder (even though it's in .gitignore)
git add -f dist/
git add .htaccess

# Commit and push
git commit -m "Add production build for Hostinger"
git push origin main
```

Then in Hostinger:
- Set deployment path to `dist` folder
- Or configure it to copy `dist` contents to `public_html`

