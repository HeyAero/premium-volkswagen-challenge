/**
 * This section is the jQuery .click listeners for the features section on desktop
 * It sets the button which has been clicked with the 'feature-active' class
 * Then reveals the correct section and hides the others.
 *
 * This is done by using the jQuery functions .addClass and .removeClass.
 * We first add the 'featured-active' class and remove it from the other buttons
 * Then we use the bootstrap CSS 'd-none' to hide other elements and reveal the others.
 *
 * This is done for all 4 sections
 * 1. Key Features
 * 2. Interior
 * 3. Exterior
 * 4. Secruity & Saftey
 */

// FEATURE BUTTON FOR KEY FEATURES
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

// FEATURE BUTTON FOR INTERIOR
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

// FEATURE BUTTON FOR EXTERIOR
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

// FEATURE BUTTON FOR SAFTEY & SECURITY
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

/**
 * jQuery for the mobile navigation menu
 *
 * It works by:
 * 1. Listing for the event 'click' for the relevant button
 * 2. Checks if the section it wishes to reveal is hidden or not by checking if it has the class of 'd-none'
 * 2a. If it does, it removes that class and reveals it
 * 2b. If it does not, it hides the section
 */

// Dashed Menu Button to reveal whole mobile menu
$('#mobile-menu').click(function () {
  if ($('#mobile-nav').hasClass('d-none')) {
    $('#mobile-nav').removeClass('d-none');
  } else {
    $('#mobile-nav').addClass('d-none');
  }
});

// Reveal sub-section for car links
$('#mobile-menu-cars').click(function () {
  if ($('#mobile-cars-dropdown').hasClass('d-none')) {
    $('#mobile-cars-dropdown').removeClass('d-none');
  } else {
    $('#mobile-cars-dropdown').addClass('d-none');
  }
});

// Reveal sub-section for van links
$('#mobile-menu-vans').click(function () {
  if ($('#mobile-vans-dropdown').hasClass('d-none')) {
    $('#mobile-vans-dropdown').removeClass('d-none');
  } else {
    $('#mobile-vans-dropdown').addClass('d-none');
  }
});

// Reveal sub-section for electric vehicle links
$('#mobile-menu-electric').click(function () {
  if ($('#mobile-electric-dropdown').hasClass('d-none')) {
    $('#mobile-electric-dropdown').removeClass('d-none');
  } else {
    $('#mobile-electric-dropdown').addClass('d-none');
  }
});

// Reveal sub-section for service links
$('#mobile-menu-services').click(function () {
  if ($('#mobile-services-dropdown').hasClass('d-none')) {
    $('#mobile-services-dropdown').removeClass('d-none');
  } else {
    $('#mobile-services-dropdown').addClass('d-none');
  }
});

/**
 * Mobile section for the features section. It will only reveal on devices with a certain width.
 *
 * Similar to the mobile menu it works as so:
 * 1. Listing for the event 'click' for the relevant button
 * 2. Checks if the section it wishes to reveal is hidden or not by checking if it has the class of 'd-none'
 * 2a. If it does, it removes that class and reveals it
 * 2b. If it does not, it hides the section
 */

// Mobile section of Key Features
$('#learn-more-key').click(function () {
  if ($('#feature-key-sm').hasClass('d-none')) {
    $('#feature-key-sm').removeClass('d-none');
  } else {
    $('#feature-key-sm').addClass('d-none');
  }
});

// Mobile section of Interior
$('#learn-more-interior').click(function () {
  if ($('#feature-interior-sm').hasClass('d-none')) {
    $('#feature-interior-sm').removeClass('d-none');
  } else {
    $('#feature-interior-sm').addClass('d-none');
  }
});

// Mobile section of Exterior
$('#learn-more-exterior').click(function () {
  if ($('#feature-exterior-sm').hasClass('d-none')) {
    $('#feature-exterior-sm').removeClass('d-none');
  } else {
    $('#feature-exterior-sm').addClass('d-none');
  }
});

// Mobile section of Saftey & Secruity
$('#learn-more-saftey').click(function () {
  if ($('#feature-saftey-sm').hasClass('d-none')) {
    $('#feature-saftey-sm').removeClass('d-none');
  } else {
    $('#feature-saftey-sm').addClass('d-none');
  }
});

/**
 * Smooth scroll for info-nav.
 *
 * All buttons are listened for and if a button is clicked it will automatically scroll the user
 * to the relevant section they have clicked.
 *
 * It works by:
 * 1. Listing to the click event
 * 2. Taking the documentElement and body
 * 3. Animating it by using the jQuery function scrollTop() - https://api.jquery.com/scrolltop/
 *    Get the current vertical position of the scroll bar for the first element in the set of matched
 *    elements or set the vertical position of the scroll bar for every matched element.
 * 4. 2000 is the time for the animation period
 */

// Scroll animation for the comparison section
$('#info-nav-comparison').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#comparison-div').offset().top - 150,
    },
    2000
  );
});

// Scroll animation for the features section
$('#info-nav-features').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#features-div').offset().top - 150,
    },
    2000
  );
});

// Scroll animation for the going electric section
$('#info-nav-electric').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#electric-div').offset().top - 150,
    },
    2000
  );
});

// Scroll animation for the enquiry section
$('#info-nav-enquiry').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#enquiry-div').offset().top - 50,
    },
    2000
  );
});
