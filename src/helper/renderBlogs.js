import { findBlogById } from "./findById.js";
import { blogImage } from "../components/blogImage.js";
import { blogContent } from "../components/blogCon.js";
import { RelatedLinks } from "../components/relatedlinks.js";

export const renderBlog = (blogid) => {
  const blogObject = findBlogById(blogid);
  const sectionDiv = document.getElementById("section");
  const asideDiv = document.getElementById("aside");
  blogObject.then((blog) => {
    // console.log(blog);
    sectionDiv.innerHTML = "";
    sectionDiv.appendChild(blogImage(blog[0].imageUrl));
    sectionDiv.appendChild(blogContent(blog[0].title, blog[0].content));
    asideDiv.innerHTML = "";
    asideDiv.appendChild(RelatedLinks(blog[0].links));
  });
};
