import { CDN_URL } from "../utils/constant";
import {useState} from "react";

const styleCard ={
    backgroundColor :"#f0f0f0",
  }
  const RestaurantCard =(props) =>  
  {
    const {resData} = props;
  
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData;
  
    return(
      <div className='res-card' style={styleCard}>
        <img 
        className="res-logo" 
        alt='res-logo'
        src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4> {cuisines}</h4>
        <h4> {avgRating}</h4>
        <h4>Delivery Time: {sla.deliveryTime} Mins</h4>
      </div>
    );
  }
export default RestaurantCard;  
