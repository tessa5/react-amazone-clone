import React from 'react'
import moment from "moment";
import ProductCheckout from './ProductCheckout'
import CurrencyFormat from 'react-currency-format'


function Order({order}) {
    return (
        <div className="order p-16 mx-8 border relative">
            <h1>Order</h1>
            <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
            <p className="id absolute top-24 right-12">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <ProductCheckout
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="text-left font-bold">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
