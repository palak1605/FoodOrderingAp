import React from "react";
import Logo from '../Assets/foodvilla.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
 const cartitem=useSelector(store=>store.cart.items)
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
     <a href="/">
      <img
       className="h-28 p-2"
        alt="logo"
        src={Logo}
      ></img>
    </a>
      
      <div >
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
       
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
          <li className="px-2"><Link to="/cart">Cart {cartitem.length}items</Link></li>
         
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
