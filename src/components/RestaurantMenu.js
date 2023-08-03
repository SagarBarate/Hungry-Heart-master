import React from 'react'
import { useState ,useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();


  useEffect( () => {
    fetchMenu();
}, []);
const fetchMenu = async () =>
{
    const data = await fetch(MENU_API+resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
};

  if (resInfo === null) {
    return <Shimmer />; 
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className='menu'>
      <h1>{name}</h1>
      {cuisines && cuisines.length > 0 && <p>{cuisines.join(", ")} - {costForTwoMessage}</p>}
      <ul>
        {
        itemCards.map( item => (
        <li>
            {item.card.info.name} - Rs:{item.card.info.price /100}
        </li>
        ))
        }
        
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
