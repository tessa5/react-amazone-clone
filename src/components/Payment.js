import React, { useState, useEffect } from 'react'
import ProductCheckout from './ProductCheckout'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer'
import { Link, useHistory} from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import { db } from './Firebase';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                //object
                method: 'post',
                // Stripe expects the total in a currencies subunits thus times 100
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('The secret is.. meeeee', clientSecret)
    console.log('👱', user)

    const handleSubmit= async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

        
    }
    
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }

    return (
        <div>
            <div className="payment-container container mx-auto w-1/2 p-4 text-center">
                <h1 className="bg-gray-300 h-24 pt-8 text-center decoration-none text-xl font-bold border-b-2 border-black">Please Checkout (<Link to="/checkout">{basket?.length} items </Link>)</h1>
                <section className="flex p-4 mx-4">
                    <h3 className="text-lg font-bold w-1/4 border-b-2">Delivery Address</h3>
                    <div className="address w-3/4 font-bold border-b-2 ">
                        <p>{user?.email}</p>
                        <p>Good to be Learing Street</p>
                        <p>React, JS</p>
                    </div>
                </section>
                <section className="flex p-4 mx-4">
                    <h3 className="text-lg font-bold w-1/4 border-b-2">Review items and delivery</h3>
                    <div className="items w-3/4 font-bold border-b-2">
                        {basket.map(item => (
                            <ProductCheckout
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                        )}
                    </div>
                </section>
                <section className="flex p-4 mx-4">
                    <h3 className="text-lg font-bold w-1/4 border-b-2">Payment Method</h3>
                    <div className="payment w-3/4 font-bold border-b-2">
                        <form className="" onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                                <div className="pricing">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3 className="pb-4 font-bold ">Order Total: {value}</h3>
                                                    )}
                                                decimalScale={2}
                                                value={getBasketTotal(basket)}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                    />
                                    <button
                                        className=""
                                        disabled={processing || disabled || succeeded}
                                    >
                                        <span>
                                            {processing ? <p>Processing</p> : 'Buy Now'}    
                                        </span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                        </form>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Payment
