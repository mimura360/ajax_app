function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function(post) {
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => {
      const postId = post.getAttribute("date-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () =>{
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        const item = XHR.response.post;
        if (item.checked === true){
          post.setAttribute("date-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("date-check");
        }
      }
    });
  });
}
setInterval(check, 1000);