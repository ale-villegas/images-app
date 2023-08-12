/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { AiOutlineSearch, AiFillHeart, AiFillHome } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { NavContext } from "../context/NavContext";
import { Link } from "react-router-dom";


const Navbar = () => {
  const {
 location,
    darkMode,
    handleChange,

    setDarkMode,
    input,
   
  } = useContext(NavContext); 


  const [showInput, setShowInput] = useState(false)

  return (
    <>
      <nav> 
        <Link to={"/"}>
        <AiFillHome
          size={22}
          color={location.pathname === "/" ? "white" : "#999499" }
          className="icon" 
          onClick={() => {
            setShowInput(false)
            window.scrollTo(0, 0)
          }}
        />

</Link>

<Link to={"/likes"}>
        <AiFillHeart
          size={22}
          color={location.pathname === "/likes" ? "white" : "#999499"}
          className="icon"
          onClick={() => {
            setShowInput(false)
            window.scrollTo(0, 0)
          }}
   
        />
 </Link>
 <Link to={"/search"}>
        <AiOutlineSearch
          size={22}
          color={location.pathname === "/search" ? "white" : "#999499" }
          className="icon"
          onClick={() => {
            setShowInput(!showInput)
            window.scrollTo(0, 0)
          } }
        />
</Link>
        <input
          type="text"
          className={showInput ? "open" : ""}
          onChange={handleChange}
          value={input}
          placeholder="Sea, Mountain, Barcelona..."
        />
      </nav>

      <div className="theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <BsFillSunFill
            size={16}
            color="white"
            className="icon-theme"
           
          />
        ) : (
          <BsFillMoonFill
            size={16}
            color="white"
            className="icon-theme"
          
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
