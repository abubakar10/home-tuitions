@echo off
echo Building React app...
call npm run build

if exist "dist" (
    echo.
    echo Build successful!
    echo.
    echo Adding dist folder to Git...
    git add -f dist/
    git add .htaccess
    
    echo.
    echo Committing changes...
    git commit -m "Deploy: Add production build for Hostinger" || echo No changes to commit
    
    echo.
    echo Pushing to GitHub...
    git push origin main
    
    echo.
    echo Deployment files pushed to GitHub!
    echo.
    echo Next steps in Hostinger:
    echo 1. Go to Git settings in Hostinger
    echo 2. Pull the latest changes
    echo 3. Set deployment directory to 'dist' folder
    echo 4. Or copy dist/* contents to public_html/
) else (
    echo.
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

pause

