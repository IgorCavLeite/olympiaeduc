@echo off
start cmd /k "cd backend && npx tsx server.ts"
start cmd /k "cd frontend && npx expo start"