import React from 'react'
import ProductCheckout from './ProductCheckout'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer'
import { Link,} from 'react-router-dom';

function Payment() {
const [{basket, user}, dispatch] = useStateValue();

    return (
        <div>
            <div className="payment-container">
                <h1 className="bg-gray-300 h-24 pt-8 text-center decoration-none text-xl font-bold border-b-2 border-black">Please Checkout (<Link to="/checkout">{basket?.length} items </Link>)</h1>
                <section className="container mx-auto w-1/2 text-center">
                    <h3 className="text-lg font-bold my-2 border-b-2">Delivery Address</h3>
                    <div className="address my-3 font-bold border-b-2 border-black">
                        <p>{user?.email}</p>
                        <p>Good to be Learing Street</p>
                        <p>React, JS</p>
                    </div>
                </section>
                <section className="container mx-auto w-1/2 text-center">
                    <h3 className="text-lg font-bold my-2 border-b-2 mx-4">Review items and delivery</h3>
                    <div className="items mx-16">
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
                <section className="container mx-auto w-1/2 text-center">
                    <h3>Payment Method</h3>
                    <div className="payment">
                    <CurrencyFormat
                        renderText={(value) => (
                            <h3>Order Total: {value}</h3>
                                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                                    />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Payment
