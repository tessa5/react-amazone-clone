import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { getBasketTotal} from './reducer'

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='border bg-gray-200 flex flex-col justify-between p-5 rounded-md h-36 w-96 mt-3'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="flex items-center">
                        <input 
                        type="checkbox"
                        className='mr-2'
                        /> This order contains a gift
                    </small>
                    </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />
        <button 
            onClick={e=> history.push('/payment')}
            className=' py-1 bg-yellow-300 rounded-md shadow'>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal
