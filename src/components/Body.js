import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {LINK, Link} from "react-router-dom"

const Body =() =>{
  const [listOfRestaurant, setListofRestaurant] = useState([]);
  const[filteredRestaurant, setfilteredRestaurant]=useState([])
  const [searchText, setSearchText] = useState("");

  //whenever state variable update, react triggers a reconsalation cycle (re- renders the component)

useEffect(()=>{fetchData();
},[]);

const fetchData = async() =>{
  const data = await fetch(
   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.969539&lng=72.819329&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

    const json = await data.json();
    console.log(json);
    setListofRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  };



  return listOfRestaurant.length ===0 ? <Shimmer /> :(
    
    console.log(listOfRestaurant);
    
    <div className='body'>
      <div className='filter'>
        <div className="search">

        <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())

            );
            setfilteredRestaurant(filteredRestaurant);}}>Search
          </button>

        </div>

        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
        
            setfilteredRestaurant(filteredList);
        }}
        
        >Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
 
        {listOfRestaurant.map((restaurant) => (
          <Link key={restaurant.data.id} to={"/restaurants/"+restaurant.data.id}>
            <RestaurantCard key={restaurant?.info.} resData={restaurant?.info}/>
          </Link>
          
        ))}

        
      </div>
    </div>
  );
};

export default Body;

