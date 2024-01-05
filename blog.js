import { postArr } from "./post.js";

const blogInfo = document.getElementById("blog-info");
const blogId = getBlogId("id");
const blog = postArr.find((post) => post.id === blogId);

function getBlogId(parameter) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(parameter);
}

const { title, date2, image, remark, detail } = blog;

document.title = `${title} | My Learning Journal`;
blogInfo.innerHTML += `
    <div class="info">
        <p class="blog-date">${date2}</p>
        <h1 class="blog-title">${title}</h1>
    </div>
    <div class="blog-cover"><img src="${image}" class="blog-img"></div>
    <div>
        <p class="blog-details">${remark}</p>
        <p class="blog-details">${detail}</p>
    </div>
`;