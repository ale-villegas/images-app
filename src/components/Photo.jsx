/* eslint-disable react/prop-types */

const Photo = ({photo, openModal}) => {
  return (
    <div className={`photo-container`} onClick={() => openModal(photo.img_regular)} >
        <img src={photo.img_thumb} alt={photo.description} loading="lazy"/>
 
    </div>
  )
}

export default Photo