# Hostinger Deployment Guide

## Step-by-Step Instructions

### Step 1: Build Your React App

First, build your React application to create production-ready static files:

```bash
npm run build
```

This will create a `dist` folder with all the optimized static files.

### Step 2: Upload to Hostinger

1. **Log in to Hostinger** (hPanel or File Manager)

2. **Navigate to your domain's public_html folder**
   - Usually located at: `public_html` or `domains/yourdomain.com/public_html`

3. **Delete all existing files** in public_html (if any)

4. **Upload ONLY the contents of the `dist` folder**
   - Open the `dist` folder on your computer
   - Select ALL files and folders inside `dist` (not the dist folder itself)
   - Upload them to `public_html`

5. **Upload the `.htaccess` file**
   - Copy the `.htaccess` file from the project root
   - Upload it to `public_html` (same location as index.html)

### Step 3: Verify File Structure

Your `public_html` folder should look like this:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-xxxxx.css
│   └── index-xxxxx.js
└── favicon.svg
```

### Step 4: Test Your Website

Visit your domain in a browser. The website should load correctly.

## Important Notes

- **DO NOT upload** the entire project folder
- **DO NOT upload** `node_modules`, `src`, `package.json`, etc.
- **ONLY upload** the contents of the `dist` folder
- Make sure `.htaccess` is uploaded (it's a hidden file, enable "Show hidden files" in your file manager)

## Troubleshooting

### If you see "Composer.json not found" error:
- This means Hostinger is trying to run it as a PHP project
- Make sure you're uploading to `public_html` and not a subdirectory
- Ensure `.htaccess` file is present

### If the site shows only the title but no content:
- Check browser console for errors (F12)
- Verify all files from `dist` folder are uploaded
- Check that `.htaccess` file is uploaded correctly
- Clear browser cache

### If routes don't work (404 errors):
- Make sure `.htaccess` file is uploaded
- Verify mod_rewrite is enabled on Hostinger (contact support if needed)

## Alternative: Using FTP

If you prefer FTP:

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Hostinger FTP
3. Navigate to `public_html`
4. Upload contents of `dist` folder
5. Upload `.htaccess` file

## Quick Build & Deploy Script

You can create a simple script to build and prepare files:

```bash
# Build the project
npm run build

# The dist folder is now ready to upload
# Upload everything inside dist/ to public_html/
```

