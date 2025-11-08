@echo off
echo Building React app...
call npm run build

if exist "dist" (
    echo.
    echo ✓ Build successful!
    echo.
    echo Next steps:
    echo 1. Open the 'dist' folder
    echo 2. Upload ALL contents of 'dist' folder to Hostinger's public_html
    echo 3. Upload the '.htaccess' file to public_html as well
    echo 4. Your website should now be live!
) else (
    echo.
    echo ✗ Build failed! Please check for errors.
    pause
    exit /b 1
)

pause

