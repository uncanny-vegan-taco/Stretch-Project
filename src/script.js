let media = document.querySelector("#media");

let neck = document.querySelector("#neck");
neck.addEventListener("click", () => {
  media.innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/JUP_YdYyfQw?si=ysTeSZMCmnjBM0hT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
});

let shoulders = document.querySelector("#shoulders");
shoulders.addEventListener("click", () => {
  media.innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/JUP_YdYyfQw?si=ysTeSZMCmnjBM0hT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
});
