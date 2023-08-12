import { useContext, useEffect } from "react";
import ListOfImagesRandom from "./ListOfImagesRandom";
import { PhotosContext } from "../context/PhotosContext";
import Modal from "./Modal";

import { Route, Routes } from "react-router-dom";
import SearchView from "./SearchView";
import Likes from "./Likes";

import { useNearScreen } from "../hooks/useNearScreen";
import { usePhotos } from "../hooks/usePhotos";

const View = () => {
  const { modal, setModal, handleClickPhoto } = useContext(PhotosContext);
  const { isNearScreen, fromRef } = useNearScreen();
  const { photos } = usePhotos(isNearScreen);

  useEffect(() => {
    if (modal.isOpen) {
      // Deshabilitar el desplazamiento cuando el modal se abre
      document.body.style.overflow = "hidden";
    } else {
      // Habilitar el desplazamiento cuando el modal se cierra
      document.body.style.overflow = "auto";
    }
  }, [modal.isOpen]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ListOfImagesRandom
              photos={photos}
              handleClickPhoto={handleClickPhoto}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchView photos={photos} handleClickPhoto={handleClickPhoto} />
          }
        />
        <Route
          path="/likes"
          element={
            <Likes photos={photos} handleClickPhoto={handleClickPhoto} />
          }
        />
      </Routes>

      {modal.isOpen && (
        <Modal
          photo={modal.photo}
          handleClose={() => setModal({ ...modal, isOpen: false })}
        />
      )}

      <span ref={fromRef} id="shivato" />
    </>
  );
};

export default View;
