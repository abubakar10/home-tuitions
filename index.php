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

// If the file exists, serve it
if ($requestPath !== '/' && file_exists(__DIR__ . $requestPath)) {
    return false; // Let Apache handle it
}

// For all other routes, serve index.html (React Router)
$indexFile = __DIR__ . '/dist/index.html';

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

