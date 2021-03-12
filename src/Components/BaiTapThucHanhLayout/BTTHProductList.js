import React, { Component } from 'react'
import BTTHProductItem from './BTTHProductItem'

export default class BTTHProductList extends Component {
    render() {
        return (
            <div className="row mb-4">
                <div className="col-3">
                    <BTTHProductItem />
                </div>
                <div className="col-3">
                    <BTTHProductItem />
                </div>
                <div className="col-3">
                    <BTTHProductItem />
                </div>
                <div className="col-3">
                    <BTTHProductItem />
                </div>
            </div>
        )
    }
}
