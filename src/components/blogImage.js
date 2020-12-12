export const blogImage = (blog) => {
  const div = document.createElement("div");
  div.classList.add("blog-image");

  const img = document.createElement("img");
  img.src = blog;
  img.alt = "some";
  img.classList.add("image");
  div.appendChild(img);

  return div;
};
