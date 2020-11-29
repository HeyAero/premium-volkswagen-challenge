window.onscroll = function () {
  setSticky();
};
var navbar = document.getElementById('info-nav');
var checkOffset = navbar.offsetTop;

function setSticky() {
  if (window.pageYOffset >= checkOffset) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
}
