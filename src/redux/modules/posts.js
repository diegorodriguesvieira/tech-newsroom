import { filters } from "../../constants";
import * as services from "../../services";

const POSTS_LOADING = "tech/posts/LOADING";
const POSTS_SUCCESS = "tech/posts/SUCCESS";
const POSTS_ERROR = "tech/posts/ERROR";

const POSTS_FILTER_SET = "tech/posts/FILTER_SET";
const POSTS_ORDER_SET = "tech/posts/ORDER_SET";

const initialState = {
  items: [],
  loading: false,
  error: false,
  order: {
    date: filters.desc,
  },
  filter: {
    author: "",
  },
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
    case POSTS_FILTER_SET:
      return {
        ...state,
        filter: payload,
      };
    case POSTS_ORDER_SET:
      return {
        ...state,
        order: payload,
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

export const setFilter = (payload) => (dispatch) =>
  dispatch({ type: POSTS_FILTER_SET, payload });

export const setOrder = (payload) => (dispatch) =>
  dispatch({ type: POSTS_ORDER_SET, payload });
