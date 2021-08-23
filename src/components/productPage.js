import React from 'react'
import { Star } from '@material-ui/icons'
import { useStateValue} from './StateProvider'

function ProductPage({ id,rating,image,price,title }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = ( ) => {
    // this is to dispatch the item into the data layer
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
        id: id,
        title:title,
        image: image,
        rating:rating,
        price: price,
        
        },
    });
    };
    return (
        <div className="m-2">
            <div className="h-64 overflow-hidden">
                
                <img 
                    alt="content" 
                    className="object-contain h-full w-full" 
                    src={image}
                />
            </div>
            <p className="text-base leading-normal mt-4 h-16">{title}</p>
            <p className="ratings text-yellow-200 ">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <Star/>
                ))}
            </p>  
            <p className="price mt-3">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button
            onClick={addToBasket}
            className="btn border border-2 border-yellow-700 mt-3 bg-yellow-500 px-3 py-1">Add to Basket</button>
        </div>
    )
}

export default ProductPage
