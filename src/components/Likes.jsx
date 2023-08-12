/* eslint-disable react/prop-types */

import MasonryComponent from "./Masonry"
import Photo from "./Photo"


const Likes = ({handleClickPhoto, photos}) => {
  
  return (
  <MasonryComponent>
   
          {photos.likedPhotos.map((photo) => (
              <Photo
                photo={photo}
                key={photo.id}
                openModal={() => handleClickPhoto(photo)}
              />
            ))} 

         
  </MasonryComponent>
  )
}

export default Likes