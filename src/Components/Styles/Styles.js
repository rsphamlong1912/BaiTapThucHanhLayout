import React, { Component } from 'react'
//cách 1: import đường dẫn css từ file component, ảnh hưởng toàn cục 
//import './styles.css';

//cách 2: import css tại component, ảnh hưởng tại component đó
import style from './styles.module.css'

export default class Styles extends Component {
    render() {
        return (
            <div className="container">
                <p className={style.textGreen}>Demo CSS</p>
                <p className={style['textGreen']}>Demo CSS 2</p>
                <p className={`${style.textGreen} ${style.bgBlack} display-4`}>ahiihi</p>

                <section style={{
                    backgroundColor : 'black',
                    color: 'yellow'
                }}>Hello Long Pahm</section>
            </div>
        )
    }
}
