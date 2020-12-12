const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

export const blogs = (async () => {
  const get = await fetch(url);
  return get.json();
})();
