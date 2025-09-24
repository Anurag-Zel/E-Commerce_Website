#!/bin/bash

echo "🛑 Stopping E-Commerce Application Servers..."

# Stop backend server
echo "📡 Stopping Backend Server..."
pkill -f "node index.js"

# Stop frontend server
echo "🎨 Stopping Frontend Server..."
pkill -f "react-scripts start"

# Alternative method using ports
# lsof -ti:5001 | xargs kill -9 2>/dev/null
# lsof -ti:3000 | xargs kill -9 2>/dev/null

echo "✅ All servers stopped!"
