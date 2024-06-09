import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from "../Constant";
// import UseRestaurant from '../../utils/UseRestaurant';
import getRestrauntsInfo from '../../utils/UseRestaurant';

function RestrauntMenu() {
  const { id } = useParams();
  const [restraunt, setRestraunt] = useState(null);

  useEffect(() => {
      const fetchRestraunt = async () => {
          try {
              const restrauntData = await getRestrauntsInfo(id);
              setRestraunt(restrauntData);
          } catch (error) {
              console.error('Error fetching restraunt:', error);
          }
      };
      fetchRestraunt();
  }, [id]);

  return !restraunt ? (
      <Shimmer />
  ) : (
      <div>
          <div className="flex">
              <h1>Restraunt id: {id}</h1>
              {console.log("000000000000",restraunt)}
              <img src={IMG_CDN_URL + restraunt?.card?.info?.cloudinaryImageId} alt="Restaurant" />
              <h3>{restraunt?.card?.info?.area}</h3>
              <h3 className="text-bold">{restraunt?.card?.info?.cuisines.join(", ")}</h3>
              <h3 className='h-2 m-3'> {restraunt?.card?.info?.city}</h3>
              <h3>{restraunt?.card?.info?.avgRating} stars</h3>
              <h3>{restraunt?.card?.info?.costForTwoMsg}</h3>
          </div>
      </div>
  );
}

export default RestrauntMenu;