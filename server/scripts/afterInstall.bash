#!/usr/bin/env bash

# I have left a few things in here and will explain this further (see below)
#rsync --delete-before --verbose --archive --exclude "htdocs/media/" --exclude ".*" --exclude "htdocs/var/" --exclude "htdocs/app/etc/local.xml" /var/www/release/ /var/www/magento/ > /var/log/deploy.log

sudo mkdir -vp /var/www/html/paytron/server/config/ssl/
sudo cp -r /etc/ssl/paytron/* /var/www/html/paytron/server/config/ssl/
sudo chown -R 1000 /var/www/html/paytron/server/
cd /var/www/html/paytron/server && sudo npm i
forever start app.js --prod