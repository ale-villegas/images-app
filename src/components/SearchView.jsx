/* eslint-disable react/prop-types */
import  { useContext } from 'react'

import { NavContext } from '../context/NavContext';
import Photo from './Photo';
import MasonryComponent from './Masonry';


const SearchView = ({photos,  handleClickPhoto}) => {
    const { input } = useContext(NavContext); 

  return (
    
    <MasonryComponent>   

          {input && photos.searchPhotos.length > 0 ?
            photos.searchPhotos.map((photo) => (
              <Photo
                photo={photo}
                key={photo.id}
                openModal={() => handleClickPhoto(photo)}
              />
            ))
          :

          <span className="not-photos">Looks like you haven&apos;t made any searches yet. Start by entering a keyword above!</span>
          }


    </MasonryComponent>
  )
}

export default SearchView