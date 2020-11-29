/**
 * Function that fixes the info-bar to the top of the page when
 * scrolled past.
 *
 * ERROR: For some reason on GitHub pages this feature does not work, it fixes itself to the top too early.
 */

// Runs this function every time the user scrolls
window.onscroll = function () {
  setSticky();
};

// Declare the navbar element
var navbar = document.getElementById('info-nav');

// Get the offset
var checkOffset = navbar.offsetTop;

/**
 * The function where it adds the class
 *
 * If the info-nav is at the top of the page it will add the fixed-top bootstrap class.
 * If the info-nav is below the page then it will remove the function.
 */
function setSticky() {
  if (window.pageYOffset >= checkOffset) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
}
