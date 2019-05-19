import React,{useContext} from 'react'
import { Badge } from 'antd'
import {CartContext} from '../Contexts/CartContext'
import {SettingContext} from '../Contexts/SettingContext'
import Settings from './Settings'

function Cart() {

    const {cartTotalQty} =  useContext(CartContext);
    const {darkMode} =  useContext(SettingContext);

    const color= darkMode?`gray`:'white';

    return (
        <div style={{paddingTop:60, backgroundColor:color}}>
            <Settings />
            <p>Menu Bar</p>
            <Badge count={cartTotalQty} showZero style={{ backgroundColor: 'green' }} />
            <hr/>
        </div>
    )
}

export default Cart
