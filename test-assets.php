<?php
/**
 * Test file to verify asset paths
 * Delete this file after deployment
 */

echo "<h1>Asset Path Test</h1>";
echo "<p>Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "</p>";
echo "<p>Script Directory: " . __DIR__ . "</p>";
echo "<p>Request URI: " . $_SERVER['REQUEST_URI'] . "</p>";

$testFiles = [
    '/dist/assets/index-BUR2mBo5.js',
    '/dist/assets/index-xVQI6vz0.css',
    '/dist/index.html',
    '/dist/favicon.svg'
];

echo "<h2>File Check:</h2>";
echo "<ul>";
foreach ($testFiles as $file) {
    $fullPath = __DIR__ . $file;
    $exists = file_exists($fullPath);
    $status = $exists ? "✅ EXISTS" : "❌ NOT FOUND";
    echo "<li>{$file}: {$status}";
    if ($exists) {
        echo " (Size: " . filesize($fullPath) . " bytes)";
    }
    echo "</li>";
}
echo "</ul>";

echo "<h2>Asset URLs:</h2>";
echo "<ul>";
echo "<li><a href='/assets/index-BUR2mBo5.js'>/assets/index-BUR2mBo5.js</a></li>";
echo "<li><a href='/assets/index-xVQI6vz0.css'>/assets/index-xVQI6vz0.css</a></li>";
echo "</ul>";
?>

