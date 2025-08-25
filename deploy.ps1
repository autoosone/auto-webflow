# Webflow Cloud Deployment Script - PowerShell
Write-Host "🚀 Webflow Cloud Auto Deployment Script" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

# Set working directory
Set-Location -Path "C:\auto\auto100"

# Clean up any problematic TypeScript configs
Write-Host "🧹 Cleaning up TypeScript configs..." -ForegroundColor Yellow
if (Test-Path "next.config.ts") {
    Move-Item "next.config.ts" "next.config.ts.backup" -Force
    Write-Host "✅ Moved next.config.ts to backup" -ForegroundColor Green
}

# Ensure only .js config exists
Write-Host "🔧 Verifying configuration files..." -ForegroundColor Yellow
if (-not (Test-Path "next.config.js")) {
    Write-Host "❌ next.config.js missing!" -ForegroundColor Red
    exit 1
}

# Test local build first
Write-Host "🏗️ Testing local build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Local build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Local build successful!" -ForegroundColor Green

# Test OpenNext build
Write-Host "🚀 Testing OpenNext build..." -ForegroundColor Yellow
npm run cf:build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ OpenNext build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ OpenNext build successful!" -ForegroundColor Green

# Deploy via Webflow Cloud with proper input
Write-Host "☁️ Deploying to Webflow Cloud..." -ForegroundColor Yellow

# Use PowerShell's input redirection
$deployInput = "main"
$deployInput | webflow cloud deploy --project-name "webflow-auto-1000" --auto-publish

Write-Host "🎉 Deployment script complete!" -ForegroundColor Green
