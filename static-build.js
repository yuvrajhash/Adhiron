const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

console.log('Starting static build process...');

// Clean next cache
console.log('Cleaning Next.js cache...');
try {
  execSync('npx rimraf .next', { stdio: 'inherit' });
} catch (error) {
  console.warn('Warning: Failed to clean cache, continuing anyway');
}

// Create a public directory and favicon if it doesn't exist
const publicDir = path.join(__dirname, 'public');
const faviconPath = path.join(publicDir, 'favicon.ico');

if (!fs.existsSync(publicDir)) {
  console.log('Creating public directory...');
  fs.mkdirSync(publicDir, { recursive: true });
}

if (!fs.existsSync(faviconPath)) {
  console.log('Creating favicon placeholder...');
  fs.writeFileSync(faviconPath, 'favicon placeholder');
}

// Handle API routes for static export
const apiDir = path.join(__dirname, 'app', 'api');
const apiBackupDir = path.join(__dirname, '_api_backup');

// Backup and remove API folder for static export
if (fs.existsSync(apiDir)) {
  console.log('Handling API routes for static export...');
  
  // Backup API directory
  if (fs.existsSync(apiBackupDir)) {
    fs.rmSync(apiBackupDir, { recursive: true, force: true });
  }
  
  try {
    fs.mkdirSync(apiBackupDir, { recursive: true });
    fs.cpSync(apiDir, apiBackupDir, { recursive: true });
    fs.rmSync(apiDir, { recursive: true, force: true });
    console.log('API directory temporarily removed for static export');
  } catch (error) {
    console.warn(`Warning when handling API directory: ${error.message}`);
  }
}

// Handle favicon.ico in app directory
const appFaviconPath = path.join(__dirname, 'app', 'favicon.ico');
console.log('Checking for favicon.ico in app directory...');

try {
  if (fs.existsSync(appFaviconPath)) {
    console.log('Moving app/favicon.ico to public directory...');
    // Backup first if it exists and is a file
    if (fs.statSync(appFaviconPath).isFile()) {
      // Read and copy to public directory
      const faviconContent = fs.readFileSync(appFaviconPath);
      fs.writeFileSync(faviconPath, faviconContent);
    }
    // Remove the file/directory from app
    if (fs.statSync(appFaviconPath).isDirectory()) {
      fs.rmSync(appFaviconPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(appFaviconPath);
    }
  }
} catch (error) {
  console.warn(`Warning when handling favicon: ${error.message}`);
}

// Install dependencies
console.log('Installing dependencies...');
try {
  execSync('npm install --no-audit', { stdio: 'inherit' });
} catch (error) {
  console.warn('Warning: Dependency installation had issues, continuing anyway');
}

// Check if next.config.js exists and has the right output option
const nextConfigPath = path.join(__dirname, 'next.config.js');
try {
  if (fs.existsSync(nextConfigPath)) {
    let configContent = fs.readFileSync(nextConfigPath, 'utf8');
    
    // If output: 'export' is not present, add it
    if (!configContent.includes("output: 'export'")) {
      console.log('Updating next.config.js to include output: export...');
      
      // Simple config replacement (this is a basic approach)
      if (configContent.includes('module.exports')) {
        configContent = configContent.replace(
          'module.exports =', 
          "module.exports = Object.assign({output: 'export'}, "
        );
        configContent = configContent.replace(/\}\s*;?\s*$/, '});');
        
        fs.writeFileSync(nextConfigPath, configContent);
      }
    }
  } else {
    // Create a basic next.config.js
    console.log('Creating next.config.js with output: export...');
    const basicConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
`;
    fs.writeFileSync(nextConfigPath, basicConfig);
  }
} catch (error) {
  console.warn(`Warning when handling next.config.js: ${error.message}`);
}

// Run the Next.js patching script
console.log('Patching Next.js for Windows compatibility...');
try {
  require('./patch-nextjs');
} catch (error) {
  console.warn(`Warning when patching Next.js: ${error.message}`);
}

// Run the Next.js build using a more robust approach
console.log('Running Next.js build...');
try {
  // Try regular build command first  
  console.log('Attempting build with next build...');
  const result = spawnSync('npx', ['next', 'build'], {
    stdio: 'inherit',
    env: { ...process.env, NODE_OPTIONS: '--max_old_space_size=4096' }
  });
  
  if (result.status !== 0) {
    console.log('Initial build failed, trying alternative approach...');
    
    // Try fallback to maintenance mode if build fails
    // Copy the maintenance file to output directory
    const outDir = path.join(__dirname, 'out');
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    const maintenanceFile = path.join(__dirname, 'maintenance.html');
    if (fs.existsSync(maintenanceFile)) {
      console.log('Deploying maintenance page as fallback...');
      fs.copyFileSync(maintenanceFile, path.join(outDir, 'index.html'));
      console.log('Maintenance page deployed successfully!');
    } else {
      console.error('Maintenance page not found. Creating a basic one...');
      const basicMaintenance = `<!DOCTYPE html>
<html>
<head><title>Site Under Maintenance</title></head>
<body><h1>Site Under Maintenance</h1><p>We'll be back soon!</p></body>
</html>`;
      fs.writeFileSync(path.join(outDir, 'index.html'), basicMaintenance);
    }
    
    console.log('Static export created with maintenance page');
  } else {
    console.log('Build completed successfully!');
  }
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} finally {
  // Restore API routes if they were backed up
  if (fs.existsSync(apiBackupDir)) {
    console.log('Restoring API routes...');
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }
    fs.cpSync(apiBackupDir, apiDir, { recursive: true });
    fs.rmSync(apiBackupDir, { recursive: true, force: true });
  }
}

console.log('Build process completed.'); 