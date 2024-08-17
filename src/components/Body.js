import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";
const Body = () => {
  const [restaurantList, setrestaurantList] = useState(resList);
  const [filteredRestaurantsrch, setfilteredRestaurantsrch] = useState(resList);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550"
    );

    const json = await data.json();

    console.log(json.data.success.cards[1]);
    setrestaurantList(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurantsrch(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (restaurantList === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
      <div class="search">
        <input
            type="text"
            class="search-box"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            placeholder="Search..."
        />
        <button
            class="search-button"
            onClick={() => {
                // Filter restaurant cards and update UI with searchText
                const filteredRestaurantsrch = restaurantList.filter((resList1) =>
                    resList1.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurantsrch(filteredRestaurantsrch);
            }}
        >
            Search
        </button>
      </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setrestaurantList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurantsrch.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestroCard
            resName="Dominos"
            rating="4.3"
            delTime="10-15 mins"
            cuisine="Pizza,Burger, Beverages Majestic"
            image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG"
          /> */}
      </div>
    </div>
  );
};

export default Body;
