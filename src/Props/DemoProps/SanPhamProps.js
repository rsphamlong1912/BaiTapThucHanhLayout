import React, { Component } from 'react'

export default class SanPhamProps extends Component {
    render() {

        //this.props dùng để nhận giá trị từ component cha truyền vào
        //this.props không cho phép gán lại giá trị

        //es5
        // let sanPham = this.props.sp;
        //es6
        let {img,id,name,price} = this.props.sp;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                    </div>
                </div>
            </div>

        )
    }
}
