import format from "date-fns/format";
import { createSelector } from "reselect";
import { filters } from "../../constants";
import { orderPostsByDate } from "./helpers";

export const getAuthors = (state) => state.authors.items;

export const getOrder = (state) => state.posts.order;

export const getFilter = (state) => state.posts.filter;

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

export const getPostsFilteredOrdered = createSelector(
  [getPostsWithAuthors, getOrder, getFilter],
  (posts, order, filter) => {
    const { author } = filter;

    const orderedPosts = orderPostsByDate(
      posts,
      order.date ? order.date : filters.desc
    );

    return orderedPosts.filter((post) => {
      if (author) {
        return String(post.metadata.authorId) === author;
      }
      return true;
    });
  }
);

export const getNewestPosts = createSelector([getPostsWithAuthors], (posts) => {
  return orderPostsByDate(posts, filters.desc);
});
