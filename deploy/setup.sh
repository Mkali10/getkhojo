#!/bin/bash
sudo apt update -y
sudo apt install -y nginx git nodejs npm

sudo npm install -g pm2

cd /home/ubuntu
git clone https://github.com/Mkali10/getkhojo.git

cd getkhojo/backend
npm install
pm2 start ecosystem.config.js
pm2 save

cd ../frontend
npm install
npm run build

sudo mkdir -p /var/www/getkhojo
sudo cp -r build/* /var/www/getkhojo

sudo cp ../deploy/nginx.conf /etc/nginx/sites-available/default
sudo systemctl restart nginx

sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN

