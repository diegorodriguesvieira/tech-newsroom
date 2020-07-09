import { combineReducers } from "redux";
import authors from "./modules/authors";
import posts from "./modules/posts";

const appReducer = combineReducers({
  authors,
  posts,
});

export default appReducer;
