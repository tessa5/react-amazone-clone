import React, { useState, useEffect } from 'react'
import { db } from "./Firebase"
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
const [orders, setOrders] = useState([]);
const [{ basket, user}, dispatch] = useStateValue();

useEffect(() => {
    if(user) {
        db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data:doc.data()
        })))
    })
    } else {
        setOrders([])
    }
    
}, [user])

    return (
        <div className="px-8 py-16">
            <h2 className="mx-8 mb-3 font-bold ">Your Orders</h2>
            <div className="orders">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
