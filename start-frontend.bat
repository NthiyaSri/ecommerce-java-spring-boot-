@echo off
echo Starting Ecommerce Frontend...
echo.
cd ecommerce-frontend
echo Installing dependencies...
npm install
echo.
echo Starting Angular development server on port 4203...
ng serve --port 4203 --open
pause