const galleryRequested = () => {
  return {
    type: "FETCH_GALLERY_REQUEST"
  };
};

const galleryLoaded = newGallery => {
  return {
    type: "FETCH_GALLERY_SUCCESS",
    payload: newGallery
  };
};

const galleryError = error => {
  return {
    type: "FETCH_GALLERY_FAILURE",
    payload: error
  };
};

export const fetchBooks = (UnsplashService, dispatch) => () => {
    
    dispatch(galleryRequested());
  
    UnsplashService
      .getGallery()

      .then(data => dispatch(galleryLoaded(data)))

      .catch(error => dispatch(galleryError(error)));
  };
