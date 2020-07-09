import * as services from "../../services";

const POSTS_LOADING = "tech/posts/LOADING";
const POSTS_SUCCESS = "tech/posts/SUCCESS";
const POSTS_ERROR = "tech/posts/ERROR";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        error: false,
        items: payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

export const fetchPosts = () => async (dispatch) => {
  return services
    .fetchPosts()
    .then(({ data }) => {
      dispatch({ type: POSTS_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: POSTS_ERROR, payload: true });
    })
    .finally(() => {
      dispatch({ type: POSTS_LOADING, payload: false });
    });
};
