import { blogs } from "../data.js";

export const findBlogById = (blogId) => {
  return blogs.then((blog) => {
    // console.log(blog);
    return blog.filter((element) => {
      //   console.log(element.id);
      return element.id == blogId;
    });
  });
};
