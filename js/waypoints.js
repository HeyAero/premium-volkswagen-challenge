/**
 * PLUGIN: Waypoints
 * Link: http://imakewebthings.com/waypoints/
 * Documentation: http://imakewebthings.com/waypoints/guides/getting-started/
 *
 * Waypoints for the #info-nav
 * These waypoints are used to set the active class to the relevant section the user is on.
 * 'info-nav-active' is the CSS class used.
 *
 * We fetch the element by ID then pass through a handler which runs the function.
 * In this case we are adding the class to the respected <a> nav item.
 * The offset is also set in some of the waypoints so the function is
 * called before the top of the section reaches the top of the window.
 */

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

/**
 * waypointCount is a function used to trigger the counting animation when on the comparison div.
 * Each <p> tag which needs to be "counted" has been given the ".data-count" class.
 * From there we declare "countTo" which is the variable 'data-count', which is number we wish to count to.
 * We then animate the text by counting from 0 to the desired number.
 *
 * 'duration'       - set the duration of the count. 3000 = 3 seconds
 * 'easing'         - set the easing equation to an animation
 * step             - setting the step function for each step
 * complete         - setting the function when the count is complete
 */

var waypointCount = new Waypoint({
  element: document.getElementById('comparison-div'),
  handler: function () {
    $('.data-count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  },
  offset: '20%',
});
