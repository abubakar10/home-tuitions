<?php
/**
 * Hostinger Deployment - React App Router
 * This file allows Hostinger to detect the project and serve the React app
 */

// Get the current request URI
$requestUri = $_SERVER['REQUEST_URI'];
$requestPath = parse_url($requestUri, PHP_URL_PATH);

// Remove query string
$requestPath = strtok($requestPath, '?');

// Normalize path (remove leading/trailing slashes except for root)
$requestPath = '/' . trim($requestPath, '/');

// Get the base directory
$baseDir = __DIR__;
$distDir = $baseDir . '/dist';

// CRITICAL: Handle assets FIRST - before anything else
// This prevents assets from being served as HTML
if (preg_match('/^\/assets\//i', $requestPath)) {
    $assetPath = ltrim($requestPath, '/');
    $distFile = $distDir . '/' . $assetPath;
    
    // Try alternative paths
    if (!file_exists($distFile)) {
        $distFile = $baseDir . '/dist' . $requestPath;
    }
    
    if (file_exists($distFile) && is_file($distFile)) {
        $ext = strtolower(pathinfo($distFile, PATHINFO_EXTENSION));
        $mimeTypes = [
            'js' => 'application/javascript; charset=utf-8',
            'mjs' => 'application/javascript; charset=utf-8',
            'css' => 'text/css; charset=utf-8',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'eot' => 'application/vnd.ms-fontobject'
        ];
        
        if (isset($mimeTypes[$ext])) {
            header('Content-Type: ' . $mimeTypes[$ext]);
        } else {
            // Default for JS
            if ($ext === 'js' || $ext === 'mjs') {
                header('Content-Type: application/javascript; charset=utf-8');
            }
        }
        header('Cache-Control: public, max-age=31536000');
        header('X-Content-Type-Options: nosniff');
        header('Content-Length: ' . filesize($distFile));
        readfile($distFile);
        exit;
    }
    // If file doesn't exist, return 404
    http_response_code(404);
    header('Content-Type: text/plain');
    echo 'Asset not found: ' . $requestPath;
    exit;
}

// Handle favicon requests
if (preg_match('/^\/favicon\.(svg|ico|png)$/i', $requestPath)) {
    $faviconFile = $distDir . $requestPath;
    
    if (!file_exists($faviconFile)) {
        $faviconFile = $baseDir . '/dist' . $requestPath;
    }
    
    if (file_exists($faviconFile) && is_file($faviconFile)) {
        $ext = strtolower(pathinfo($faviconFile, PATHINFO_EXTENSION));
        $mimeTypes = [
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'png' => 'image/png'
        ];
        
        if (isset($mimeTypes[$ext])) {
            header('Content-Type: ' . $mimeTypes[$ext]);
        }
        header('Cache-Control: public, max-age=31536000');
        readfile($faviconFile);
        exit;
    }
}

// Check if it's a request for static assets (other than assets folder)
if (preg_match('/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i', $requestPath)) {
    $assetFile = $distDir . $requestPath;
    
    if (!file_exists($assetFile)) {
        $assetFile = $baseDir . '/dist' . $requestPath;
    }
    
    if (file_exists($assetFile) && is_file($assetFile)) {
        $ext = strtolower(pathinfo($assetFile, PATHINFO_EXTENSION));
        $mimeTypes = [
            'js' => 'application/javascript; charset=utf-8',
            'css' => 'text/css; charset=utf-8',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'eot' => 'application/vnd.ms-fontobject'
        ];
        
        if (isset($mimeTypes[$ext])) {
            header('Content-Type: ' . $mimeTypes[$ext]);
        }
        header('Cache-Control: public, max-age=31536000');
        header('X-Content-Type-Options: nosniff');
        readfile($assetFile);
        exit;
    }
    // If file doesn't exist, return 404
    http_response_code(404);
    exit;
}

// If the file exists in dist, serve it
$normalizedPath = ltrim($requestPath, '/');
$distFileCheck = $distDir . '/' . $normalizedPath;
if ($requestPath !== '/' && $requestPath !== '' && file_exists($distFileCheck) && is_file($distFileCheck)) {
    return false; // Let Apache handle it
}

// For all other routes, serve index.html (React Router)
$indexFile = $distDir . '/index.html';
if (!file_exists($indexFile)) {
    $indexFile = $baseDir . '/index.html';
}

if (file_exists($indexFile)) {
    // Read and output the index.html
    header('Content-Type: text/html; charset=utf-8');
    readfile($indexFile);
} else {
    // If dist folder doesn't exist, show helpful message
    http_response_code(503);
    header('Content-Type: text/html; charset=utf-8');
    echo '<!DOCTYPE html>
<html>
<head>
    <title>Deployment Required</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #1e1b4b;
            color: #fff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        h1 { color: #ffd700; }
        code {
            background: rgba(255,255,255,0.1);
            padding: 2px 8px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Build Required</h1>
        <p>The React app needs to be built before deployment.</p>
        <p>Please run: <code>npm run build</code></p>
        <p>Then commit the <code>dist</code> folder to Git and push.</p>
    </div>
</body>
</html>';
}
?>
