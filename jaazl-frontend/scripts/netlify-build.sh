#!/bin/bash
set -e

echo "🔧 Starting Netlify build process..."
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

echo "📦 Installing dependencies with legacy peer deps..."
npm install --legacy-peer-deps

echo "📁 Current directory contents:"
ls -la

echo "🔍 Checking types directory..."
ls -la types/ || echo "Types directory not found"

echo "🏗️ Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"