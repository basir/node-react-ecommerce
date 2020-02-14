# Amazona: An ECommerce Website like Amazon.com

Demo : https://amazonaapp.herokuapp.com/

## Table of Conent

- Video-01-Intro
- Video-02-Install-VSCode-Chrome
- Video-03-Website-Template
- Video-04-Product-List
- Video-05-Sidebar
- Video-06-Create-React-App
- Video-07-Render-Products-Array
- Video-08-React-Router-Product-Details
- Video-09-Create-Node-Express-Server
- Video-10-Fetch-Server-Data-Using-React-Hooks
- Video-11-Manage-State-With-Redux
- Video-12-Add-Redux-To-Product-Details
- Video-13-Shopping-Cart-Screen
- Video-14-Connect-to-MongoDB
- Video-15-Signin-Register-Users
- Video-16-Manage-Products-Screen
- Video-17-Checkout-Wizard-Screen
- Video-18-Create-Order
- Video-19-Connect-to-Paypal
- Video-20-User-Profile
- Video-21-Manage-Order-Screen
- Video-22-Filter-Sort-Products
- Video-23-Deploy-Website-on-Heroku
  1. create Heroku Account
  2. create new App
  3. git remote add heroku https://git.heroku.com/myamazona.git
  4. Install Heroku CLI
  5. heroku login
  6. git push heroku master
  7.  create https://www.mongodb.com/cloud 
  8.  create database and copy connection string
  9.  add MONGODB_URL to config var of heroku
  10. add PAYPAL_CLIENT_ID to config var of heroku
  11. Update package.json  
  12. "build": "rm -rf dist && babel backend -d dist",
  13. "heroku-postbuild": "npm run build && cd frontend && npm install && npm run build"
  14. "engines": { "node": "12.4.0", "npm": "6.9.0"}
  15. Procfile web: node dist/server.js