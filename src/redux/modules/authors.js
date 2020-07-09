import * as services from "../../services";

const AUTHORS_LOADING = "tech/authors/LOADING";
const AUTHORS_SUCCESS = "tech/authors/SUCCESS";
const AUTHORS_ERROR = "tech/authors/ERROR";

const initialState = {
  authors: [],
  authorsLoading: false,
  authorsError: false,
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case AUTHORS_LOADING:
      return {
        ...state,
        authorsLoading: payload,
      };
    case AUTHORS_SUCCESS:
      return {
        ...state,
        authorsError: false,
        authors: payload,
      };
    case AUTHORS_ERROR:
      return {
        ...state,
        authorsError: payload,
      };
    default:
      return state;
  }
}

export const fetchAuthors = () => (dispatch) => {
  try {
    dispatch({ type: AUTHORS_LOADING, payload: true });
    const { data } = services.fetchAuthors();
    dispatch({ type: AUTHORS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AUTHORS_ERROR, payload: true });
  } finally {
    dispatch({ type: AUTHORS_LOADING, payload: false });
  }
};
