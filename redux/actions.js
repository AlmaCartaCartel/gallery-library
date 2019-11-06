import UnsplashService from "../service/service";
const unsplash = new UnsplashService();
// Отправка запроса
const galleryRequested = () => {
  return {
    type: "FETCH_GALLERY_REQUEST"
  };
};
// Успешный запрос 
const galleryLoaded = newGallery => {
  return {
    type: "FETCH_GALLERY_SUCCESS",
    payload: newGallery
  };
};
// Ошибка
const galleryError = error => {
  return {
    type: "FETCH_GALLERY_FAILURE",
    payload: error
  };
};
// Обновление изображения для image-screen
export const getUriSelectedPicture = photo => {
  return{
    type: "GET_URI_SELECTED_PICTURE",
    payload: photo

  }
}
// ОТправка запроса на сервер и обработка данных
export const fetchUnsplach = dispatch => () => {
  dispatch(galleryRequested());

  unsplash
    .getGalleryList()

    .then(data => dispatch(galleryLoaded(data)))

    .catch(error => dispatch(galleryError(error)));
};
