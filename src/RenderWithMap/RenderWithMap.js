import React, { Component } from 'react'


export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'iPhone X', price: 1000, img: 'https://picsum.photos/200/200' },
        { id: 2, name: 'Samsung Galaxy', price: 2000, img: 'https://picsum.photos/200/200' },
        { id: 3, name: 'iPhone XS Max', price: 3000, img: 'https://picsum.photos/200/200' }
    ]

    renderProduct = () => {
        // const arrDivProduct = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];

        //     const jxsDivProduct = <div className="col-4">
        //         <div className="card text-left">
        //             <img className="card-img-top" src={product.img} alt />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>
        //     arrDivProduct.push(jxsDivProduct);

        // }

        // return arrDivProduct;
        const contentJSX = this.productList.map((product, index) => {
            return <div key={index} className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src={product.img} alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        });
        return contentJSX;
    }

    renderProductTable =()=>{
        const contentJSXTable = this.productList.map((product, index)=>{
            return <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} alt={product.name}></img></td>
            </tr>
        })
        return contentJSXTable;
    }


    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">Danh sách sản phẩm</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>

                <div className="mt-5">
                    <table className="table table-striped table-dark table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name Product</th>
                                <th>Price</th>
                                <th>Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProductTable()}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
