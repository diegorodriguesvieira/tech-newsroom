import * as services from "../../services";

const AUTHORS_LOADING = "tech/authors/LOADING";
const AUTHORS_SUCCESS = "tech/authors/SUCCESS";
const AUTHORS_ERROR = "tech/authors/ERROR";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case AUTHORS_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case AUTHORS_SUCCESS:
      return {
        ...state,
        error: false,
        items: payload,
      };
    case AUTHORS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

export const fetchAuthors = () => async (dispatch) => {
  dispatch({ type: AUTHORS_LOADING, payload: true });
  return services
    .fetchAuthors()
    .then(({ data }) => {
      dispatch({ type: AUTHORS_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: AUTHORS_ERROR, payload: true });
    })
    .finally(() => {
      dispatch({ type: AUTHORS_LOADING, payload: false });
    });
};
