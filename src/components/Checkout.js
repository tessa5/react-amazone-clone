import React from 'react'
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
const [ {basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout mx-3 flex'>
            <div className='checkout-leftside flex-1'>
                <img 
                    className="w-full"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt='add'
                />

                <div>
                    {/*optional chaining*/} 
                    <h4>Hello, {user?.email} </h4>
                    <h2 className='border-b-2 border-yellow-400 mt-3 ml-3 font-bold text-lg'> Your Shopping Basket</h2>
                    {basket.map(item => (
                        <ProductCheckout
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout-left'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
