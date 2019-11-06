// Иннициализация начального состояния
const initialState = {
  gallery: [],
  loading: true,
  error: null,
  large_image: null
};

const redecers = (state = initialState, action) => {
  switch (action.type) {
    // Отправка запроса
    case "FETCH_GALLERY_REQUEST":
      return {
        gallery: [],
        loading: true,
        error: null,
        large_image: state.large_image
      };
    // Успех
    case "FETCH_GALLERY_SUCCESS":
      return {
        gallery: action.payload,
        loading: false,
        error: null,
        large_image: state.large_image
      };
    // Ошибка
    case "FETCH_GALLERY_FAILURE":
      return {
        gallery: [],
        loading: false,
        error: action.payload,
        large_image: state.large_image
      };
      // Обновляет изображение для компонента image-screen
    case "GET_URI_SELECTED_PICTURE":
      return {
        ...state,
        large_image: action.payload
      };
    default:
      return state;
  }
};

export default redecers;
