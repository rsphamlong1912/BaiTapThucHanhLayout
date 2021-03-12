import React, { Component } from 'react'
import BT1Header from './BT1Header'
import BT1ProductList1 from './BT1ProductList1'
import BT1ProductList2 from './BT1ProductList2'
import BT1Promotion from './BT1Promotion'
import BT1Slider from './BT1Slider'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div className="bg-dark">
                <BT1Header />
                <BT1Slider />
                <BT1ProductList1 />
                <BT1ProductList2 />
                <BT1Promotion />
            </div>
        )
    }
}

