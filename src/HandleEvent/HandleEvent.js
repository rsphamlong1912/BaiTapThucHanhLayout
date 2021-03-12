import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () =>{
        alert('hello Long');
    }

    showMess  =(name) =>{
        alert(`Hello ${name}`)
    }

    render() {

        return (
            <div>
                <button id="btnClick" onClick={this.handleClick}>Click me</button>
                <button id="btnClick" onClick={()=> {
                    alert('hello Pahm')
                }}>Click me</button>
                <button id="btnClick" onClick={() => this.showMess('Long Pahm')}>Show message</button>
            </div>
        )
    }
}
