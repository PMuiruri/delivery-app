import React, { useState,  useEffect} from 'react';
import './card.css';
import apiConfig  from '../../key';

const Card = (props) =>{
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
    const res = await fetch(`https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${props.location[1]}%2C${props.location[0]}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=${apiConfig.mapKey}`);
      const json = await res.json();
      setResponse(json.Response.View[0].Result[0].Location.Address.Label);
    };
    fetchData();
  }, [props.location]);

  return (
    <div className="card">
    <div className="delivery-price" name="Delivery" price-attr={(props.delivery_price/100).toFixed(2)} currency={props.currency}>
    </div>
    <div className="image">
      <img src={props.image} alt={props.name}/>
    </div>
    <div className="content">
      <h2 className="title">{props.name}</h2>
      <div className="city">{props.city}</div>
      <div className="inner-content">
      <div className="location">{response}</div>
        <div>
        </div>
        <div className="icons">
          <span className="icon icon 1"><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
          <span className="icon icon 2"><i className="fa fa-tags" aria-hidden="true"></i></span>
          <span className="icon icon 3"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Card;