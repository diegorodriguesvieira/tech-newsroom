import format from "date-fns/format";
import { createSelector } from "reselect";

export const getAuthors = (state) => state.authors.items;

export const getPosts = (state) => {
  return state.posts.items.map((item) => {
    const {
      metadata: { publishedAt },
    } = item;

    return {
      ...item,
      publishedAt: format(new Date(publishedAt), "dd/MM/yyyy"),
    };
  });
};

export const getPostsWithAuthors = createSelector(
  [getPosts, getAuthors],
  (posts, authors) => {
    return posts.map((post) => {
      const {
        metadata: { authorId },
      } = post;

      const author = authors.find((item) => item.id === authorId) || {};

      return {
        ...post,
        author,
      };
    });
  }
);
