// Feature buttons on desktop

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

// Mobile feature buttons

$('#learn-more-key').click(function () {
  if ($('#feature-key-sm').hasClass('d-none')) {
    $('#feature-key-sm').removeClass('d-none');
  } else {
    $('#feature-key-sm').addClass('d-none');
  }
});

$('#learn-more-interior').click(function () {
  if ($('#feature-interior-sm').hasClass('d-none')) {
    $('#feature-interior-sm').removeClass('d-none');
  } else {
    $('#feature-interior-sm').addClass('d-none');
  }
});

$('#learn-more-exterior').click(function () {
  if ($('#feature-exterior-sm').hasClass('d-none')) {
    $('#feature-exterior-sm').removeClass('d-none');
  } else {
    $('#feature-exterior-sm').addClass('d-none');
  }
});

$('#learn-more-saftey').click(function () {
  if ($('#feature-saftey-sm').hasClass('d-none')) {
    $('#feature-saftey-sm').removeClass('d-none');
  } else {
    $('#feature-saftey-sm').addClass('d-none');
  }
});

// Scrolldown
$('#info-nav-comparison').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#comparison-div').offset().top - 150,
    },
    2000
  );
});

$('#info-nav-features').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#features-div').offset().top - 150,
    },
    2000
  );
});

$('#info-nav-electric').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#electric-div').offset().top - 150,
    },
    2000
  );
});

$('#info-nav-enquiry').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#enquiry-div').offset().top - 50,
    },
    2000
  );
});
