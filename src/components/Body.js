import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

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
    setListofRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info.name);
    

  };

  return listOfRestaurant.length ===0 ? <Shimmer /> :(
    
    <div className='body'>
      <div className='filter'>
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
          }}/>

          <button onClick={()=>{
            //Filter the restaurant cards and update the UI
            //searchText

            const filteredRestaurant = listOfRestaurant.filter(
              (res)=> { res.info.name.toLowerCase().includes(searchText.toLowerCase()) }
                 
              );
              
              setfilteredRestaurant(filteredRestaurant);

            }}>Search</button>

        </div>

        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurant.filter(
              (res) => res.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants.info.avgRatingString >4
          );
            
           setListofRestaurant(filteredList);
        }}
        
        >
          Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} resData={restaurant?.info}/>
        ))}

        
      </div>
    </div>
  );
};

export default Body;

//filter
// const arr = [5,3,5,6,7];

// function isOdd(x){
//     return x%2 === 0;
// };

// const output = arr.filter(isOdd);



//reduce
//sum or max

// how we used to write before the reduced

// function findsum(arr){
//     let sum =0 ;
//     for (let i)
// }

//takes two parameter function and second is any intialize value that you need to pass in accumulator
// and the first parameter  function have to parameter accumulator and current value accumulator is used to accumulate the values and curr 


// const outputreduce = arr.reduce(function (acc, curr){

//     acc = acc+curr;
//     return acc;

// },0);

//to find maximum we can use the reduce funtion also 


// const outputreducemax = arr.reduce(function (max, curr){
//      if (curr< max){
//         max =curr;
//      }
//      return max;
// },0);
// here max is accumulator and it will accumulate the maximum value whenever there is higher value than 
// max it will get updates in the funtion and will return max once the array is empty


//if you want to one object from list of object with perticular value of the object






