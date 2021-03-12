import React, { Component } from 'react'

import dataPhim from '../data/dataPhim.json'

export default class BaiTapLayoutMap extends Component {
    
      renderPhim = () => {
        const contentJSX = dataPhim.map((phim, index) => {
            return <div key={index} className="col-3">
                <div className="card text-left mt-2">
                    <img style={{height:400}} className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="card-body">
                        <h4 style={{height:50, fontSize: 22}} className="card-title">{phim.tenPhim}</h4>
                        <p style={{height:100}} className="card-text">{phim.moTa.length>100? phim.moTa.substring(0,100)+'...':phim.moTa}</p>
                    </div>
                </div>
            </div>
        });
        return contentJSX;
    }

    render() {

        return (
            <div className="container">
                <h1 className="text-center display-4 mb-4">Phim nổi bật</h1>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
}
