import React from 'react';

import { Card } from '../restaurant-card/card';

import './list.css';

export const CardList = ({data, address}) => (

 <div className="list">
    {data.map((item,i) =>{
      return <Card 
        key={i} 
        {...item} 
        address={address[i]} 
        handleChange={(e)=>this.handleChange(item.location)}/>
    })} 
</div>
);
