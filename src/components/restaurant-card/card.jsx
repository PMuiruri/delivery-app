import React from 'react';
import './card.css';

export const Card = (props) =>(
    <div className="card">
    <div className="delivery-price" name="Delivery" price-attr={(props.delivery_price/100).toFixed(2)} currency={props.currency}>
    </div>
    <div className="image">
      <img src={props.image} alt={props.name}/>
    </div>
    <div className="content">
      <h2 className="title">{props.name}</h2>
        <p className="city">{props.city}</p>
      <div className="inner-content">
        <div className="icons">
          <span className="icon icon 1"><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
          <span className="icon icon 2"><i className="fa fa-tags" aria-hidden="true"></i></span>
          <span className="icon icon 3"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
  </div>
)