#!/bin/bash
set -euo pipefail

echo "🚀 Setting up 20TWENTY Development Environment..."

# Check Node version
REQUIRED_NODE=20
CURRENT_NODE=$(node -v | cut -d'.' -f1 | tr -d 'v')
if [ "$CURRENT_NODE" -lt "$REQUIRED_NODE" ]; then
  echo "❌ Node $REQUIRED_NODE+ required. Got $CURRENT_NODE."
  exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
if ! command -v pnpm &> /dev/null; then
  echo "Installing pnpm..."
  npm install -g pnpm
fi
pnpm install

# Copy env file if not present
if [ ! -f .env ]; then
  if [ -f .env.example ]; then
    cp .env.example .env
    echo "⚠️  .env created from .env.example. Please update your secrets."
  else
    echo "DATABASE_URL=postgresql://postgres:postgres@localhost:5432/20twenty" > .env
    echo "⚠️  .env created with default DATABASE_URL."
  fi
fi

echo "✅ Setup complete! Run 'pnpm dev' to start."
