import React from 'react'
import OrderedItem from './OrderedItem/OrderedItem'
const OrderedHistory = ({order}) => {
    const {items,timestamp} = order
    return (
        <div>
            {items.map((item, index) => (
                <OrderedItem item = {item} timestamp = {timestamp} key = {index} />
            ))}
        </div>
    )
}

export default OrderedHistory
