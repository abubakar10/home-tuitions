#!/bin/bash

echo "🔨 Building React app..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist folder not found."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📦 Preparing files for Hostinger..."
echo ""

# Add all necessary files
git add -f dist/
git add .htaccess
git add index.php
git add composer.json

echo "📝 Committing changes..."
git commit -m "Deploy: Add production build and Hostinger config" || echo "No new changes"

echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment files pushed to GitHub!"
echo ""
echo "📋 Next steps in Hostinger:"
echo "1. Go to Git settings in Hostinger"
echo "2. Click 'Pull' or wait for auto-deployment"
echo "3. Your site should now work!"
echo ""
echo "The index.php file will serve your React app from the dist folder."

