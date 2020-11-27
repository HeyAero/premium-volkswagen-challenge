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

$('#feature-button-key').click(function () {
  $('#feature-button-key').addClass('feature-active');
  $('#feature-button-interior').removeClass('feature-active');
  $('#feature-button-exterior').removeClass('feature-active');
  $('#feature-button-saftey').removeClass('feature-active');

  $('#feature-key').removeClass('d-none');
  $('#feature-interior').addClass('d-none');
  $('#feature-exterior').addClass('d-none');
  $('#feature-saftey').addClass('d-none');
});

$('#feature-button-interior').click(function () {
  $('#feature-button-key').removeClass('feature-active');
  $('#feature-button-interior').addClass('feature-active');
  $('#feature-button-exterior').removeClass('feature-active');
  $('#feature-button-saftey').removeClass('feature-active');

  $('#feature-interior').removeClass('d-none');
  $('#feature-key').addClass('d-none');
  $('#feature-exterior').addClass('d-none');
  $('#feature-saftey').addClass('d-none');
});

$('#feature-button-exterior').click(function () {
  $('#feature-button-key').removeClass('feature-active');
  $('#feature-button-interior').removeClass('feature-active');
  $('#feature-button-exterior').addClass('feature-active');
  $('#feature-button-saftey').removeClass('feature-active');

  $('#feature-exterior').removeClass('d-none');
  $('#feature-key').addClass('d-none');
  $('#feature-interior').addClass('d-none');
  $('#feature-saftey').addClass('d-none');
});

$('#feature-button-saftey').click(function () {
  $('#feature-button-key').removeClass('feature-active');
  $('#feature-button-interior').removeClass('feature-active');
  $('#feature-button-exterior').removeClass('feature-active');
  $('#feature-button-saftey').addClass('feature-active');

  $('#feature-saftey').removeClass('d-none');
  $('#feature-key').addClass('d-none');
  $('#feature-interior').addClass('d-none');
  $('#feature-exterior').addClass('d-none');
});
