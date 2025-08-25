#!/bin/bash
# Webflow Cloud Deployment Script - Windows Compatible
echo "🚀 Webflow Cloud Auto Deployment Script"
echo "========================================"

# Set working directory
cd /c/auto/auto100

# Clean up any problematic TypeScript configs
echo "🧹 Cleaning up TypeScript configs..."
if [ -f "next.config.ts" ]; then
    mv "next.config.ts" "next.config.ts.backup"
    echo "✅ Moved next.config.ts to backup"
fi

# Ensure only .js config exists
echo "🔧 Verifying configuration files..."
if [ ! -f "next.config.js" ]; then
    echo "❌ next.config.js missing!"
    exit 1
fi

# Test local build first
echo "🏗️ Testing local build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Local build failed!"
    exit 1
fi

echo "✅ Local build successful!"

# Test OpenNext build
echo "🚀 Testing OpenNext build..."
npm run cf:build
if [ $? -ne 0 ]; then
    echo "❌ OpenNext build failed!"
    exit 1
fi

echo "✅ OpenNext build successful!"

# Deploy via Webflow Cloud
echo "☁️ Deploying to Webflow Cloud..."
echo "main" | webflow cloud deploy --project-name "webflow-auto-1000" --auto-publish

echo "🎉 Deployment script complete!"
