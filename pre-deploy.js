const fs = require('fs');
const path = require('path');

// Backup current next.config.js
const configPath = path.join(__dirname, 'next.config.js');
const backupPath = path.join(__dirname, 'next.config.js.bak');

if (fs.existsSync(configPath)) {
  fs.copyFileSync(configPath, backupPath);
  console.log('✅ Backed up next.config.js');
}

// Ensure no TypeScript config exists
const tsConfigPath = path.join(__dirname, 'next.config.ts');
if (fs.existsSync(tsConfigPath)) {
  fs.unlinkSync(tsConfigPath);
  console.log('✅ Removed next.config.ts');
}

console.log('✅ Pre-deployment cleanup complete');
console.log('📦 Ready for Webflow Cloud deployment');