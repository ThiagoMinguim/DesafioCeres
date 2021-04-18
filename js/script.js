function OpenNav() {
  var x = document.getElementById("nav-bar");

  if (x.className === "nav-bar") {
    x.className += " menujs";
    document.getElementById("threeline-icon").innerHTML = "&Cross;";
  } else {
    x.className = "nav-bar";
    document.getElementById("threeline-icon").innerHTML = "&#9776;";
  }
}
document.addEventListener("scroll", function (e) {
  var subir = document.getElementById("subir");
  let pageScroll = window.scrollY;
  if (pageScroll >= 150) {
    subir.style.opacity = 1;
  } else {
    subir.style.opacity = 0;
  }
});
