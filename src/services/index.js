import pMinDelay from "p-min-delay";
import { httpDelays } from "../constants";
import api from "./api";

export function fetchPosts() {
  return pMinDelay(api.get("/5be5e3fa2f000082000fc3f8"), httpDelays.normal);
}

export function fetchAuthors() {
  return pMinDelay(api.get("/5be5e3ae2f00005b000fc3f6"), httpDelays.normal);
}
