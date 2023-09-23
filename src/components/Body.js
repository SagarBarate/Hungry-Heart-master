import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() =>{
  const [listOfRestaurant, setListofRestaurant] = useState([]);
  const[filteredRestaurant, setfilteredRestaurant]=useState([])
  const [searchText, setSearchText] = useState("");

  //whenever state variable update, react triggers a reconsalation cycle (re- renders the component)

useEffect(()=>{
  fetchData();
},[]);

const fetchData = async() =>
{
  const data = await fetch(
   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.969539&lng=72.819329&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
    const json = await data.json();
    setListofRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false)
  return(
    <h1>Your internet connection is not working </h1>
);


  return listOfRestaurant.length ===0 ? <Shimmer /> :(
        
    <div className='body'>
      <div className='filter flex'>
        <div className="search m-4 p-4 ">
        
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
        }}>Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
 
        {listOfRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} 
          to={"/restaurants/"+ restaurant.info.id}
          >
          <RestaurantCard  resData={restaurant?.info}/>
          </Link>
          
        ))}

        
      </div>
    </div>
  );
};

export default Body;

