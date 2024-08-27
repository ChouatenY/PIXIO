// index.js
const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


const PaymentSchema = new mongoose.Schema({
  user: {
    name: String,
    email: String,
  },
  product: {
    name: String,
    price: Number,
  },
  paymentId: String,
  amount: Number,
  currency: String,
  status: String,
});

const Payment = mongoose.model('Payment', PaymentSchema);

app.post('/api/checkout', async (req, res) => {
  const { paymentMethodId, price } = req.body;

  try {
    // Create a PaymentIntent with the payment method ID
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100, // amount in cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    // Save payment info to MongoDB
    const paymentRecord = new Payment({
      user: {
        name: 'John Doe', // Replace with actual user data
        email: 'johndoe@example.com', // Replace with actual user email
      },
      product: {
        name: 'Example Product', // Replace with actual product data
        price: price,
      },
      paymentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
    });

    await paymentRecord.save();

    res.status(200).json({ message: 'Payment recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Payment service is running on port ${PORT}`);
});
