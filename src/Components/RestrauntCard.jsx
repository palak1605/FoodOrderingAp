import { IMG_CDN_URL } from "../Constant";
const RestrautCard = ({name,cuisines,cloudinaryImageId,locality}) => {
  // console.log("-----gggg",name,cuisines,cloudinaryImageId,locality);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 >{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestrautCard;