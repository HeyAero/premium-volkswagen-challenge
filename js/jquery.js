window.onscroll = function () {
  setSticky();
};
var navbar = document.getElementById('info-nav');
var checkOffset = navbar.offsetTop;

function setSticky() {
  if (window.pageYOffset >= checkOffset) {
    navbar.classList.add('sticky-top');
  } else {
    navbar.classList.remove('sticky-top');
  }
}
