import pMinDelay from "p-min-delay";
import api from "./api";

export function fetchPosts() {
  return pMinDelay(api.get("/5be5e3fa2f000082000fc3f8"), 300);
}

export function fetchAuthors() {
  return pMinDelay(api.get("/5be5e3ae2f00005b000fc3f6"), 300);
}
