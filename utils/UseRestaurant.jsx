import React, { useState, useEffect } from "react";
import { MENU_URL } from "../src/Constant";

  



  async function getRestrauntsInfo(id) {
    try {
      let restaurant;
      const data = await fetch(MENU_URL + id);
      console.log("----kartikey",data);
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await data.json();
      console.log("hiyyyyyyyyyyyy", json);
      restaurant=json.data.cards[2].card;
      return restaurant
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  
}

export default getRestrauntsInfo;
