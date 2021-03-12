import React, { Component } from 'react'
import BT1Product2 from './BT1Product2'


export default class BT1ProductList2 extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center text-light container-fluid">BEST LAPTOP</h1>
                <div className="row">
                    <div className="col-3">
                        <BT1Product2 />
                    </div>
                    <div className="col-3">
                        <BT1Product2 />
                    </div>
                    <div className="col-3">
                        <BT1Product2 />
                    </div>
                    <div className="col-3">
                        <BT1Product2 />
                    </div>
                    
                </div>
            </div>
        )
    }
}
