import React, { useContext } from 'react'
import { Button } from 'antd'
import { CartContext } from '../Contexts/CartContext'
import { SettingContext } from '../Contexts/SettingContext'

function SingleProductPage() {

    const { addOneToCart } = useContext(CartContext);
    const { darkMode } = useContext(SettingContext);

    const color = darkMode ? `gray` : 'white';



    return (
        <div style={{ paddingTop: 60, backgroundColor: color }}>
            <p>Single Product Page</p>
            <Button onClick={addOneToCart} type="primary">
                Add to Cart
             </Button>
        </div>
    )
}

export default SingleProductPage
