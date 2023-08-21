const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webPush = require('web-push');
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/web-push', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const vapidKeys = {
  publicKey: 'BJMFaxhwdkmlOWcS8hB6akQyxJGZY9bKG0YtYhaRMNqWOyvhyB8XN09mOKyuQn3kvw1ru5bMyCpAeu5wao-TWPA',
  privateKey: 'shViMlPy9ZT82d1ONdbBAxEgreDghYMtd5NotrqqWeA',
};
webPush.setVapidDetails('mailto:sinev82760@royalka.com', vapidKeys.publicKey, vapidKeys.privateKey);

app.use(bodyParser.json());

const subscriptionRoutes = require('./routes/subscriptions');
app.use('/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});