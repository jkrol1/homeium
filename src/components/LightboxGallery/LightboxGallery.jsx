import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightboxGallery = ({ images, toggleLightbox }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const moveToNextImage = () => setImageIndex((imageIndex + 1) % images.length);
  const moveToPreviousImage = () =>
    setImageIndex((imageIndex + images.length - 1) % images.length);

  return (
    <Lightbox
      mainSrc={images[imageIndex]}
      nextSrc={images[(imageIndex + 1) % images.length]}
      prevSrc={images[(imageIndex + images.length - 1) % images.length]}
      onCloseRequest={toggleLightbox}
      onMovePrevRequest={moveToNextImage}
      onMoveNextRequest={moveToPreviousImage}
    />
  );
};

export default LightboxGallery;
