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

// CRITICAL: Handle assets FIRST - before anything else
// This prevents assets from being served as HTML
// Handle both /assets/ and assets/ paths
if (preg_match('/^\/?assets\//i', $requestPath)) {
    // Normalize the path
    $normalizedPath = ltrim($requestPath, '/');
    $distFile = __DIR__ . '/dist/' . $normalizedPath;
    
    // Also try with leading slash
    if (!file_exists($distFile)) {
        $distFile = __DIR__ . '/dist' . $requestPath;
    }
    
    if (file_exists($distFile)) {
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
        readfile($distFile);
        exit;
    }
    // If file doesn't exist, return 404
    http_response_code(404);
    header('Content-Type: text/plain');
    echo 'Asset not found';
    exit;
}

// Handle favicon requests first
if (preg_match('/^\/?favicon\.(svg|ico|png)$/i', $requestPath)) {
    $normalizedPath = ltrim($requestPath, '/');
    $distFile = __DIR__ . '/dist/' . $normalizedPath;
    
    if (!file_exists($distFile)) {
        $distFile = __DIR__ . '/dist' . $requestPath;
    }
    
    if (file_exists($distFile)) {
        $ext = strtolower(pathinfo($distFile, PATHINFO_EXTENSION));
        $mimeTypes = [
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'png' => 'image/png'
        ];
        
        if (isset($mimeTypes[$ext])) {
            header('Content-Type: ' . $mimeTypes[$ext]);
        }
        header('Cache-Control: public, max-age=31536000'); // Cache for 1 year
        readfile($distFile);
        exit;
    }
}

// Check if it's a request for static assets (other than assets folder)
if (preg_match('/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i', $requestPath)) {
    // Try to serve from dist folder
    $normalizedPath = ltrim($requestPath, '/');
    $distFile = __DIR__ . '/dist/' . $normalizedPath;
    
    if (!file_exists($distFile)) {
        $distFile = __DIR__ . '/dist' . $requestPath;
    }
    
    if (file_exists($distFile)) {
        // Set proper MIME types
        $ext = strtolower(pathinfo($distFile, PATHINFO_EXTENSION));
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
        readfile($distFile);
        exit;
    }
    // If file doesn't exist, return 404
    http_response_code(404);
    exit;
}

// If the file exists in dist, serve it
$normalizedPath = ltrim($requestPath, '/');
$distFileCheck = __DIR__ . '/dist/' . $normalizedPath;
if ($requestPath !== '/' && $requestPath !== '' && file_exists($distFileCheck)) {
    return false; // Let Apache handle it
}

// For all other routes, serve index.html (React Router)
// Try dist folder first, then current directory
$indexFile = __DIR__ . '/dist/index.html';
if (!file_exists($indexFile)) {
    $indexFile = __DIR__ . '/index.html';
}

if (file_exists($indexFile)) {
    // Read and output the index.html
    readfile($indexFile);
} else {
    // If dist folder doesn't exist, show helpful message
    http_response_code(503);
    echo '<!DOCTYPE html>
<html>
<head>
    <title>Deployment Required</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #2d0a4f;
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

