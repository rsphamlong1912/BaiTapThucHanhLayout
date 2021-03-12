import React, { Component } from 'react'
import BT1Product1 from './BT1Product1'

export default class BT1ProductList1 extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center text-light container-fluid">BEST SMART PHONE</h1>
                <div className="row">
                    <div className="col-3">
                        <BT1Product1 />
                    </div>
                    <div className="col-3">
                        <BT1Product1 />
                    </div>
                    <div className="col-3">
                        <BT1Product1 />
                    </div>
                    <div className="col-3">
                        <BT1Product1 />
                    </div>
                    
                </div>
            </div>
        )
    }
}
