/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Photo = ({ photo, openModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`photo-container`}
      onClick={() => openModal(photo.img_regular)}
    >
      <img src={photo.img_thumb} alt={photo.description} loading="lazy" />
    </motion.div>
  );
};

export default Photo;
