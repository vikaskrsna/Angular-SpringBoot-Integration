#!/bin/bash

echo "⚠️  This will remove unused containers, networks, volumes, images, and build cache"
read -p "Do you want to continue? (y/n): " confirm

if [[ $confirm == [yY] ]]; then
  echo "🧹 Pruning stopped containers, networks, volumes, and images..."

sudo docker system prune -a --volumes --force

  echo "✅ Docker cleanup complete!"
else
  echo "❌ Cleanup aborted."
fi

