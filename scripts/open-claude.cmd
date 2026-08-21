@echo off
setlocal
cd /d "%~dp0.."

where claude >nul 2>nul
if errorlevel 1 (
  echo Claude Code가 설치되어 있지 않습니다.
  echo 먼저 TEACHER_START_HERE.md의 설치 안내를 따라주세요.
  pause
  exit /b 1
)

echo 안젤라 선생님 워크북 프로젝트를 여는 중입니다.
claude
