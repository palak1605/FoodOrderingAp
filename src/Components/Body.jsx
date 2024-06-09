import RestrautCard from "./RestrauntCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Filterdata from "../../utils/Filterdata";
import useOnline from "../../utils/useOnline";
import { additem, clearcart } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const Body = () => {
  const [searchtext, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useOnline();
  const dispatch = useDispatch();
  const handleadditem = () => {
    dispatch(additem("graphes"));
  };
  const handleremoveitem = () => {
    dispatch(removeitem("graphes"));
  };
  const handlerclearitem = () => {
    dispatch(clearcart());
  };
  if (!isOnline) {
    return (
      <>
        <h2>Please check your internet connection</h2>
      </>
    );
  }
  if (!allRestaurants) return null;
  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          className="focus:bg-green-200 p-2 m-2"
          type="text"
          placeholder="search"
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = Filterdata(searchtext, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestrautCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
  {
    /* <button className=" p-2 m-5 h-10 bg-blue-500" onClick={()=>handleremoveitem()}>Remove Item</button>
            
  <button className=" p-2 m-5 h-10 bg-blue-500" onClick={()=>handlerclearitem()}>clear item</button>
   <button className=" p-2 m-5 h-10 bg-blue-500" onClick={()=>handleadditem()}>Add Item</button> */
  }
};

export default Body;
