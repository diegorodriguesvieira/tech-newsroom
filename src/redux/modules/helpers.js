function ascending(a, b) {
  return a.metadata.publishedAt - b.metadata.publishedAt;
}

function descending(a, b) {
  return b.metadata.publishedAt - a.metadata.publishedAt;
}

export function orderPostsByDate(array, order) {
  if (order === "asc") {
    return array.sort(ascending);
  }

  return array.sort(descending);
}

export default orderPostsByDate;
