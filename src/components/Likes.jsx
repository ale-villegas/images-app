/* eslint-disable react/prop-types */

import MasonryComponent from "./Masonry"
import Photo from "./Photo"


const Likes = ({handleClickPhoto, photos}) => {
  
  return (
  <MasonryComponent>
   



          {photos.likedPhotos.length > 0 ? photos.likedPhotos.map((photo) => (
              <Photo
                photo={photo}
                key={photo.id}
                openModal={() => handleClickPhoto(photo)}
              />
            )) 
          : 
          <span className="not-photos">Looks like you haven&apos;t hearted any photos yet. </span>
        
          } 

         
  </MasonryComponent>
  )
}

export default Likes