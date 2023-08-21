# Node.js Web Push Server

This repository contains the source code for a basic Node.js web push server that allows you to send push notifications to subscribed clients.

## Getting Started

These instructions will help you set up and run the Node.js web push server on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or accessible)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alibakhshiilani/web-push-server.git
   cd web-push-server

### Install the dependencies:

bash
Copy code
npm install
Set up your VAPID keys:

In server.js, replace 'your_public_key' and 'your_private_key' with your actual VAPID keys. You can generate VAPID keys using tools like web-push.

### Run the server:

bash
Copy code
npm start
Access the server at http://localhost:3000.

Usage
Open a web browser and navigate to http://localhost:3000/public/index.html.

Click the "Subscribe to Push Notifications" button to grant permission for push notifications.

The service worker will handle incoming push notifications and display them as notifications.

### API Endpoints
POST /subscriptions: Endpoint to save a new subscription for push notifications.
Folder Structure
models/: Contains the MongoDB schema for storing subscriptions.
routes/: Defines the API routes for handling subscription data.
public/: Contains the client-side index.html file.
service-worker.js: Service worker script for handling push events.
main.js: Client-side JavaScript for subscribing to push notifications.
server.js: Main server file that sets up the Express app.
Docker
You can also use Docker to containerize and run the server. Check the included Dockerfile and docker-compose.yml for more details.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

Please make sure to customize the content, URLs, and any other relevant information in the `README.md` file to match your actual project setup.