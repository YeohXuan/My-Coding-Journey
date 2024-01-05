import { postArr } from "./post.js";
let totalPostRendered = 3;
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

document.addEventListener("click", (e) => {
  if (e.target.id === "open-sidebar") {
    showSidebar();
  } else if (e.target.id === "view-more") {
    viewMore()
  } else if (e.target.id === "view-less") {
    viewLess();
  } else if (e.target.id === "close-sidebar" || e.target.parentElement.id != "sidebar") {
    closeSidebar();
  }
});

function showSidebar() {
  document.getElementById("sidebar").classList.remove("hidden");
  document.getElementById("sidebar-toggle").innerHTML =
    '<i class="fa-solid fa-xmark" id="close-sidebar"></i>';
}

function closeSidebar() {
  document.getElementById("sidebar").classList.add("hidden");
  document.getElementById("sidebar-toggle").innerHTML =
    '<i class="fa-solid fa-bars" id="open-sidebar"></i>';
}

function viewMore() {
  totalPostRendered += 3;

  if (totalPostRendered >= postArr.length) {
    document.getElementById("view-more").classList.add("hidden");
    document.getElementById("view-less").classList.remove("hidden");
  }

  renderPost(totalPostRendered);
}

function viewLess() {
  if (totalPostRendered >= 6) {
    totalPostRendered -= 3;
  }

  document.getElementById("view-more").classList.remove("hidden");
  document.getElementById("view-less").classList.add("hidden");

  renderPost(totalPostRendered);
}

function renderPost(totalPost) {
  let postsHtml = '';

  for (let i = 0; i < totalPost; i++) {
    const {image, date, title, remark, id} = postArr[i];

    postsHtml += `
      <a href="blog.html?id=${id}" class="post">
        <div class="cover"><img src="${image}" class="cover-img" draggable="false"></div>
        <div class="post-preview">
            <p class="post-date">${date}</p>
            <h1 class="post-title">${title}</h1>
            <p class="remark">${remark}</p>
        </div>
      </a>
    `;
  }
  document.getElementById("post-container").innerHTML = postsHtml;
}

renderPost(totalPostRendered);