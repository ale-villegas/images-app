/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { initialState, reducerPhotos } from "../utils/reducerPhotos";
import { useReducer } from "react";


export const PhotosContext = createContext()


export const PhotosProvider = ({children}) => {
    const [photos, dispatch] = useReducer(reducerPhotos, initialState); 

    const [modal, setModal] = useState({
        photo: null,
        isOpen: false,
      });



      const handleClickPhoto = (photo) => {
        setModal({
          photo: photo,
          isOpen: true,
        });
      };
    
    return (
        <PhotosContext.Provider value={{
      photos,
      dispatch,
      handleClickPhoto,
      modal, 
      setModal, 
        }}>
            {children}
        </PhotosContext.Provider>
    )
}