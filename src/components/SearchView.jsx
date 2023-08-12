/* eslint-disable react/prop-types */
import  { useContext } from 'react'

import { NavContext } from '../context/NavContext';
import Photo from './Photo';
import MasonryComponent from './Masonry';


const SearchView = ({photos,  handleClickPhoto}) => {
    const { input } = useContext(NavContext); 

  return (
    
    <MasonryComponent>   

          {input &&
            photos.searchPhotos.map((photo) => (
              <Photo
                photo={photo}
                key={photo.id}
                openModal={() => handleClickPhoto(photo)}
              />
            ))}


    </MasonryComponent>
  )
}

export default SearchView