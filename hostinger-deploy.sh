#!/bin/bash

# Build script for Hostinger deployment
echo "🔨 Building React app..."
npm run build

if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📦 Adding dist folder to Git..."
    git add -f dist/
    git add .htaccess
    
    echo "📝 Committing changes..."
    git commit -m "Deploy: Add production build for Hostinger" || echo "No changes to commit"
    
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo ""
    echo "✅ Deployment files pushed to GitHub!"
    echo ""
    echo "Next steps in Hostinger:"
    echo "1. Go to Git settings in Hostinger"
    echo "2. Pull the latest changes"
    echo "3. Set deployment directory to 'dist' folder"
    echo "4. Or copy dist/* contents to public_html/"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

