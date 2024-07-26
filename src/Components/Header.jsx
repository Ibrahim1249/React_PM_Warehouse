
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import warehouse from "../assets/warehouse.png"
import SearchBar from "./SearchBar"

function Header() {
  const location = useLocation();
  return (
    <>
     <nav>
        <div className="logo">
            <img src={warehouse} alt="" />
        </div>
         
         <div className="menu">
            <ul>
                <li className={location.pathname === "/" ? "bg-color" : ""}><Link to="/" >Home</Link></li>
                <li className={location.pathname === "/likes" ? "bg-color" : ""}><Link to="/likes" >Liked</Link></li>
            </ul>
            <SearchBar />
         </div>
     </nav>
    </>
  )
}

export default Header