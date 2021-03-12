import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {

    productList = [
        { id: 1, name: 'iPhone X', price: 1000, img: 'https://picsum.photos/200/200' },
        { id: 2, name: 'Samsung Galaxy', price: 2000, img: 'https://picsum.photos/200/200' },
        { id: 3, name: 'iPhone XS Max', price: 3000, img: 'https://picsum.photos/200/200' }
    ]

    renderSanPham =() =>{
        return this.productList.map((sanPham,index)=>{
            return <div className="col-4" key={index}>
                <SanPhamProps sp={sanPham} />
            </div>
        })
    }

    //component sử dụng thẻ được gọi là component cha, thẻ được sử dụng là component con
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.renderSanPham()}
                </div>

            </div>
        )
    }
}
