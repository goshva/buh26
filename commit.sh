#!/bin/bash  
hugo
git add .  
read -p "Commit description: " desc  
git commit -m "$desc"  
git push origin master
