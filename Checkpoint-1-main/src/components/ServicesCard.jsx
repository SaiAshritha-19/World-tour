import './Services.css';
import { useState } from 'react';


export default function Services(props) {

    return (
        <div className="scard">
            <img src={props.imgSrc} className="scard__img" />
            <div className="scard__body">
                <h2 className="scard__title">{props.title}</h2>
                <p className="scard__description">{props.content}</p>                
                
            </div>
        </div>
    );
}