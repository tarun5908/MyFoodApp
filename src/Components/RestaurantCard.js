import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, areaName, avgRating } =
    resData;
  return (
    <div className=" px-2 py-2 w-52 h-auto bg-gray-300 m-2 rounded-lg ">
      <div className="">
        <img
          alt="res-logo"
          className="rounded-lg w-[350] h-[150px]"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h3 className="text-black text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
