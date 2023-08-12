/* eslint-disable react/prop-types */
import { useContext } from "react";
import {
  AiFillCloseCircle,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { PhotosContext } from "../context/PhotosContext";
import { ACTIONS_TYPES } from "../utils/reducerPhotos";

const Modal = ({ photo, handleClose }) => {
  const { dispatch, photos } = useContext(PhotosContext);

  const isLiked = photos.likedPhotos.find((ele) => ele.id === photo.id);

  const handleLike = (photo) => {
    if (isLiked) {
      dispatch({
        type: ACTIONS_TYPES.REMOVE_LIKE,
        payload: photo,
      });
    } else {
      dispatch({
        type: ACTIONS_TYPES.ADD_LIKE,
        payload: { ...photo, isLiked: true },
      });
    }
  };



  return (
    <div className="modal">
      <div className="box-image">
        <AiFillCloseCircle
          className="btn-close"
          size={25}
          color="black"
          onClick={handleClose}
        />
        <AiOutlineCloseCircle
          className="btn-close"
          size={25}
          color="white"
          onClick={handleClose}
        />
        <AiOutlineHeart className="btn-like " size={30} color="black" />
        <AiFillHeart
          className="btn-like  "
          size={30}
          color={isLiked ? "red" : "white"}
          onClick={() => handleLike(photo)}
        />
        <img src={photo.img_regular} alt={photo.description} />
      </div>
      <p>{photo.description}</p>
    </div>
  );
};

export default Modal;
