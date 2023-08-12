/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavContext = createContext()


export const NavProvider = ({children}) => {

    const [input, setInput] = useState("");
    const [darkMode, setDarkMode] = useState(true);

    const handleChange = (event) => {
setInput(event.target.value)
    };

    
    const location = useLocation()
    return(
        <NavContext.Provider value= {{
            input, 
            setInput,
            darkMode, 
            setDarkMode, 
          location,
            handleChange, 
      

        }}>
{children}
        </NavContext.Provider>
    )
}