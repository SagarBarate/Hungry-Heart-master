import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body =() =>
{

  const listOfRestaurant =[{
    data:{
      info:{
      "id": "23671",
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "Bellasis Road",
        "costForTwo": "₹400 for two",
        "cuisines": ["Burgers","Beverages","Cafe","Desserts"],
        "avgRating": 4.2,
    },
  },
  }
  ];

  return(
    <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={()=>{
            console.log("Button clicked");

        }}
        
        >
          Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.info.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;

//filter
const arr = [5,3,5,6,7];

function isOdd(x){
    return x%2 === 0;
};

const output = arr.filter(isOdd);



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






