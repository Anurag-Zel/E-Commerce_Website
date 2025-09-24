#!/bin/bash

echo "🚀 Starting E-Commerce Application Servers..."

# Start backend server in background
echo "📡 Starting Backend Server (Port 5001)..."
cd backend && npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "🎨 Starting Frontend Server (Port 3000)..."
cd ./frontend && npm start &
FRONTEND_PID=$!

echo "✅ Both servers are starting..."
echo "🌐 Backend: http://localhost:5001"
echo "🎨 Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait $FRONTEND_PID
