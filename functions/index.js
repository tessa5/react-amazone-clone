const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51JPS9yDX0Bj270BNOBfH4zOgsv7sfLRdNRTp68ccwVYSMLhCyQhTkCeS1piY08IkOpNqvwAEc6b8n5cvbrAX9r9I00iPFn0yAj');

//-set up API
//-App config
const app = express();
//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());
//-API routes
app.get('/', (request, response) => response.status(200).send
('hey there beautiful'));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('payment request received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})
//-Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-dd14a/us-central1/api

