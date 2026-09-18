@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 个人网站 - 本地预览

echo.
echo   正在启动本地服务器...
echo   稍等几秒会自动打开浏览器：http://localhost:5173/
echo   关闭这个窗口（或按 Ctrl+C）即可停止网站。
echo.

start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 5; Start-Process 'http://localhost:5173/'"

call npm run dev

echo.
echo   服务器已停止运行。
pause

