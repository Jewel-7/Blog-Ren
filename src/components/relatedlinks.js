import { renderBlog } from "../helper/renderBlogs.js";

export const RelatedLinks = (links) => {
  const ul = document.createElement("ul");
  ul.classList.add("blog-ul");
  links.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.title;
    li.id = element.id;
    li.addEventListener("click", () => {
      renderBlog(element.id);
    });

    ul.appendChild(li);
  });
  return ul;
};
