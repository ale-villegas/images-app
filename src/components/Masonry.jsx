/* eslint-disable react/prop-types */

import { useContext } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { NavContext } from "../context/NavContext";

const MasonryComponent = ({ children }) => {
  const { darkMode } = useContext(NavContext);
const backgroundStyle = darkMode ? "black" : "white"
  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          400: 2,
          600: 3,
          800: 3,
          900: 4,
          1100: 5,
          1300: 6,
        }}
      >
        <Masonry
          gutter={"10px"}
          className="box"
          style={{ backgroundColor: backgroundStyle}}
        >
          {children}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default MasonryComponent;
