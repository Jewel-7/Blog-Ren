import { blogs } from "../src/data.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogCon.js";
import { RelatedLinks } from "./components/relatedlinks.js";
import { findBlogById } from "./helper/findById.js";
import { head } from "./head.js";
import { data1 } from "./data1.js";
import { footContent } from "./footCon.js";
const divsection = document.getElementById("section");
const divaside = document.getElementById("aside");

blogs.then((blog) => {
  divsection.appendChild(blogImage(blog[0].imageUrl));
  divsection.appendChild(blogContent(blog[0].title, blog[0].content));
  divaside.appendChild(RelatedLinks(blog[0].links));
});

const logDiv = document.getElementById("head");
const logoImageDiv = head(data1[0].imageUrl);
console.log(logoImageDiv);
logDiv.appendChild(logoImageDiv);

const footConDiv = document.getElementById("foot-content");
const footContDiv = footContent(data1[1].content);
footConDiv.appendChild(footContDiv);
