import React, { Component } from 'react'
import BTTHContent from './BTTHContent'
import BTTHFooter from './BTTHFooter'
import BTTHHeader from './BTTHHeader'
import BTTHProductList from './BTTHProductList'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BTTHHeader />
                <div className="container">
                    <BTTHContent />
                    <BTTHProductList />
                </div>
                <BTTHFooter />
            </div>
        )
    }
}
