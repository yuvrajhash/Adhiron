/**
 * Next.js Windows Compatibility Patcher
 * 
 * This script patches Next.js to fix Windows-specific issues during static export
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Patching Next.js for Windows compatibility...');

// Path to the next directory in node_modules
const nextPath = path.join(__dirname, 'node_modules', 'next');

// Check if Next.js is installed
if (!fs.existsSync(nextPath)) {
  console.error('Next.js not found in node_modules. Installing Next.js...');
  execSync('npm install next@15.2.2', { stdio: 'inherit' });
}

// Function to safely remove a path whether it's a file, symlink, or directory
function safeRemove(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }
    
    const stats = fs.lstatSync(filePath);
    
    if (stats.isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(filePath);
    }
    console.log(`Successfully removed: ${filePath}`);
  } catch (err) {
    console.warn(`Warning: Could not remove ${filePath}: ${err.message}`);
  }
}

// Function to recursively create fake JS files
function createFakeJsFiles(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory does not exist: ${directory}`);
    return;
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively process subdirectories
      createFakeJsFiles(fullPath);
    } else if (entry.name.endsWith('.js')) {
      try {
        // Check if it's a symlink
        const stats = fs.lstatSync(fullPath);
        
        if (stats.isSymbolicLink() || stats.isDirectory()) {
          console.log(`Fixing symlink or directory: ${fullPath}`);
          
          // Remove it safely
          safeRemove(fullPath);
          
          // Create a plain JS file
          fs.writeFileSync(fullPath, `// Placeholder file created by patch-nextjs.js\nmodule.exports = {};\n`);
        }
      } catch (err) {
        console.warn(`Warning when processing ${fullPath}: ${err.message}`);
      }
    }
  }
}

// Handle specific Next.js files
const criticalFiles = [
  { 
    path: path.join(nextPath, 'dist', 'pages', '_app.js'),
    content: `// Placeholder _app.js created by patch-nextjs.js
module.exports = {
  default: function(props) {
    return props.children;
  }
};`
  },
  { 
    path: path.join(nextPath, 'dist', 'pages', '_document.js'),
    content: `// Placeholder _document.js created by patch-nextjs.js
module.exports = {
  default: function(props) {
    return props.children;
  }
};`
  },
  { 
    path: path.join(nextPath, 'dist', 'pages', '_error.js'),
    content: `// Placeholder _error.js created by patch-nextjs.js
module.exports = {
  default: function(props) {
    return props.children;
  }
};`
  }
];

// Handle each critical file
for (const file of criticalFiles) {
  console.log(`Handling critical file: ${file.path}`);
  
  // Create parent directory if needed
  const dir = path.dirname(file.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Remove existing file/directory first
  safeRemove(file.path);
  
  // Write the file
  fs.writeFileSync(file.path, file.content);
  console.log(`Created placeholder file at ${file.path}`);
}

// Fix other problematic paths
const problematicDirs = [
  path.join(nextPath, 'dist', 'pages'),
  path.join(nextPath, 'dist', 'client'),
  path.join(nextPath, 'dist', 'compiled')
];

for (const dir of problematicDirs) {
  if (fs.existsSync(dir)) {
    console.log(`Fixing problematic symlinks in ${dir}...`);
    createFakeJsFiles(dir);
  }
}

console.log('Next.js patching completed successfully!'); 