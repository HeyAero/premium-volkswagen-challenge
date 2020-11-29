var waypointComparison = new Waypoint({
  element: document.getElementById('comparison-div'),
  handler: function () {
    $('#info-nav-comparison').addClass('info-nav-active');
    $('#info-nav-features').removeClass('info-nav-active');
    $('#info-nav-electric').removeClass('info-nav-active');
    $('#info-nav-enquiry').removeClass('info-nav-active');
  },
  offset: '18%',
});

var waypointFeatures = new Waypoint({
  element: document.getElementById('features-div'),
  handler: function () {
    $('#info-nav-comparison').removeClass('info-nav-active');
    $('#info-nav-features').addClass('info-nav-active');
    $('#info-nav-electric').removeClass('info-nav-active');
    $('#info-nav-enquiry').removeClass('info-nav-active');
  },
  offset: '18%',
});

var waypointElectric = new Waypoint({
  element: document.getElementById('electric-div'),
  handler: function () {
    $('#info-nav-comparison').removeClass('info-nav-active');
    $('#info-nav-features').removeClass('info-nav-active');
    $('#info-nav-electric').addClass('info-nav-active');
    $('#info-nav-enquiry').removeClass('info-nav-active');
  },
  offset: '18%',
});

var waypointEnquiry = new Waypoint({
  element: document.getElementById('enquiry-div'),
  handler: function () {
    $('#info-nav-comparison').removeClass('info-nav-active');
    $('#info-nav-features').removeClass('info-nav-active');
    $('#info-nav-electric').removeClass('info-nav-active');
    $('#info-nav-enquiry').addClass('info-nav-active');
  },
  offset: '18%',
});

var waypointReset = new Waypoint({
  element: document.getElementById('video-div'),
  handler: function () {
    $('#info-nav-comparison').removeClass('info-nav-active');
    $('#info-nav-features').removeClass('info-nav-active');
    $('#info-nav-electric').removeClass('info-nav-active');
    $('#info-nav-electric').removeClass('info-nav-active');
  },
});
