/* eslint-disable react/prop-types */

import MasonryComponent from "./Masonry";
import Photo from "./Photo";





const ListOfImagesRandom = ({ photos, handleClickPhoto}) => {


  return (
    <>
    <MasonryComponent>
          {photos.randomPhotos && photos.randomPhotos.map((photo) => (
              <Photo
                photo={photo}
                key={photo.id}
                openModal={() => handleClickPhoto(photo)}
              />
            ))}

</MasonryComponent>
   
     
    </>
  );
};

export default ListOfImagesRandom;
