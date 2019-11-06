const redecers = (state, action) => {
  if (state === undefined) {
    return {
      gallery: [],
      loading: true,
      error: null,
      large_image: null
    };
  }

  switch (action.type) {
    case "FETCH_GALLERY_REQUEST":
      return {
        gallery: [],
        loading: true,
        error: null,
        ...state
      };

    case "FETCH_GALLERY_SUCCESS":
      return {
        gallery: action.payload,
        loading: false,
        error: null,
        ...state
      };

    case "FETCH_BOOKSGALLERY_FAILURE":
      return {
        gallery: [],
        loading: false,
        error: action.payload,
        ...state
      };
    case "GET_URI_SELECTED_PICTURE":
      return {
        ...state,
        large_image: action.payload
      };
    default:
      return state;
  }
};
