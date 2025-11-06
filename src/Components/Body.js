import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const urls = [
      // Dosa - Offset 0
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4485835&lng=78.39080349999999&collection=80435&tags=layout_CCS_PureVeg&sortBy=&filters=&type=rcv2&offset=0&page_type=null",

      // Biryani - Offset 0
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4484217&lng=78.3884118&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    ];

    const data = await Promise.all(urls.map((url) => fetch(url)));
    const jsonData = await Promise.all(data.map((res) => res.json()));

    const restaurantList = jsonData.flatMap((json) => {
      const cards = json?.data?.cards || [];
      return cards
        .map((card) => card.card?.card)
        .filter(
          (c) =>
            c?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((c) => c.info);
    });

    setListOfRestaurants(restaurantList);
    setfilteredRestaurant(restaurantList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.name
                  .toLowerCase()
                  .includes(String(searchText.trim()).toLowerCase())
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
