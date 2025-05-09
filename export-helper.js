/**
 * Next.js App Router Static Export Helper
 * This script safely prepares the app directory for static export
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Problematic directories/files for static export
const PROBLEM_PATHS = ['api', '[...nextauth]', 'favicon.ico'];

// Fix symlink issues in Next.js
function fixSymlinkIssues() {
  // Known problematic symlinks
  const problematicPaths = [
    path.join(__dirname, 'node_modules', 'next', 'dist', 'pages', '_app.js'),
    path.join(__dirname, 'node_modules', 'next', 'dist', 'pages', '_document.js'),
    path.join(__dirname, 'node_modules', 'next', 'dist', 'pages', '_error.js')
  ];
  
  console.log('Checking for problematic symlinks...');
  
  for (const symlinkPath of problematicPaths) {
    try {
      if (fs.existsSync(symlinkPath)) {
        const stats = fs.lstatSync(symlinkPath);
        
        if (stats.isDirectory()) {
          console.log(`Fixing directory symlink: ${symlinkPath}`);
          fs.rmSync(symlinkPath, { recursive: true, force: true });
          fs.writeFileSync(symlinkPath, '// Fixed symlink placeholder');
        } else if (stats.isSymbolicLink()) {
          console.log(`Fixing symlink: ${symlinkPath}`);
          
          // Try to read the link target
          let linkTarget;
          try {
            linkTarget = fs.readlinkSync(symlinkPath);
          } catch (err) {
            console.warn(`Error reading symlink: ${err.message}`);
          }
          
          // Remove the symlink
          fs.unlinkSync(symlinkPath);
          
          // Create a plain file instead
          fs.writeFileSync(symlinkPath, `// Fixed symlink that pointed to: ${linkTarget || 'unknown'}`);
        }
      }
    } catch (err) {
      console.warn(`Error handling symlink ${symlinkPath}: ${err.message}`);
    }
  }
}

// Safe backup and removal of problematic files/directories
function backupAndRemovePaths() {
  const appDir = path.join(__dirname, 'app');
  const backupDir = path.join(__dirname, '_app_backup');
  
  // Create backup directory
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Recursively backup and remove problem paths
  function processDir(dir, relativePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      if (PROBLEM_PATHS.includes(entry.name)) {
        // This is a problem path - back it up and remove it
        const backupPath = path.join(backupDir, relPath);
        
        // Create parent directories for backup
        fs.mkdirSync(path.dirname(backupPath), { recursive: true });
        
        console.log(`Backing up problematic path: ${relPath}`);
        
        try {
          if (entry.isDirectory()) {
            // Copy directory recursively
            fs.cpSync(fullPath, backupPath, { recursive: true });
            // Remove directory
            fs.rmSync(fullPath, { recursive: true, force: true });
          } else {
            // Copy file
            fs.copyFileSync(fullPath, backupPath);
            // Remove file
            fs.unlinkSync(fullPath);
          }
        } catch (err) {
          console.warn(`Warning: ${err.message}`);
        }
      } else if (entry.isDirectory()) {
        // Recursively process subdirectories
        processDir(fullPath, relPath);
      }
    }
  }
  
  // Start processing from app directory
  processDir(appDir);
  
  return backupDir;
}

// Restore paths from backup
function restorePaths(backupDir) {
  const appDir = path.join(__dirname, 'app');
  
  if (!fs.existsSync(backupDir)) return;
  
  console.log('Restoring backed up files and directories...');
  
  // Recursively restore from backup
  function restoreDir(dir, targetDir, relativePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const sourcePath = path.join(dir, entry.name);
      const targetPath = path.join(targetDir, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      // Create parent directories if needed
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      
      try {
        if (entry.isDirectory()) {
          // Create directory if it doesn't exist
          if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
          }
          
          // Recursively restore subdirectory
          restoreDir(sourcePath, targetPath, relPath);
        } else {
          // Copy file
          fs.copyFileSync(sourcePath, targetPath);
        }
        
        console.log(`Restored: ${relPath}`);
      } catch (err) {
        console.warn(`Warning when restoring ${relPath}: ${err.message}`);
      }
    }
  }
  
  // Start restoring from backup directory to app directory
  restoreDir(backupDir, appDir);
  
  // Clean up backup directory
  try {
    fs.rmSync(backupDir, { recursive: true, force: true });
  } catch (err) {
    console.warn(`Warning when removing backup: ${err.message}`);
  }
}

// Main export function
async function performExport() {
  console.log('Preparing for Next.js static export...');
  
  let backupDir = null;
  
  try {
    // Fix symlink issues
    fixSymlinkIssues();
    
    // Back up and remove problematic paths
    backupDir = backupAndRemovePaths();
    
    // Run Next.js build with static export
    console.log('Running Next.js build with static export...');
    execSync('npx next build', { stdio: 'inherit' });
    
    console.log('Static export completed successfully!');
    return true;
  } catch (error) {
    console.error('Export failed:', error.message);
    return false;
  } finally {
    // Restore backed up paths
    if (backupDir) {
      restorePaths(backupDir);
    }
  }
}

// Execute export if script is run directly
if (require.main === module) {
  performExport().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = { performExport }; 