import * as services from "../../services";

const POSTS_LOADING = "tech/posts/LOADING";
const POSTS_SUCCESS = "tech/posts/SUCCESS";
const POSTS_ERROR = "tech/posts/ERROR";

const initialState = {
  posts: [],
  postsLoading: false,
  postsError: false,
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case POSTS_LOADING:
      return {
        ...state,
        postsLoading: payload,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        postsError: false,
        posts: payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        postsError: payload,
      };
    default:
      return state;
  }
}

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_LOADING, payload: true });
    const { data } = await services.fetchPosts();
    dispatch({ type: POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POSTS_ERROR, payload: true });
  } finally {
    dispatch({ type: POSTS_LOADING, payload: false });
  }
};
