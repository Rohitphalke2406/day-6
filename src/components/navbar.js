import React from "react";
import './navbar.css';

import BadgeCart from "./BadgeCart"

function Nav({quantity}) {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <p>Add To cart</p>
           
          </li>
        
          <li><BadgeCart quantity={quantity}/> </li>
         
         
        </ul>
      </div>
    </>
  );
}

export default Nav;