import React from 'react'
import { Star } from '@material-ui/icons'
import { useStateValue } from './StateProvider'

function ProductCheckout({id, image, title, rating, price, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="flex m-8">
            <img 
            className="object-contain w-48 h-48"
            src={image}
            alt="product"
            />
            <div className="pl-8 text-left">
                <p className="">{title}</p>
                <p className="">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="ratings text-yellow-200">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <Star/>
                    ))}
                    </p> 
                {!hideButton && (
                    <button 
                    onClick={removeFromBasket}
                    className="btn border border-2 border-yellow-700 mt-3 bg-yellow-500 px-3 py-1">Remove from Basket</button>
                )}
                
            </div>
        </div>
    )
}

export default ProductCheckout
