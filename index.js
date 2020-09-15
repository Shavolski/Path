var paths = document.querySelectorAll('svg path');

[].forEach.call(paths, function(path) {
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
    'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 5s ease-in-out';
  // Go!
  path.style.strokeDashoffset = '0';
})

//This is the preloader of the site
$(window).on('load', function() { // makes sure the whole site is loaded
  $('#preloader').delay(5500).fadeOut('slow');// will fade out the white DIV that covers the website.
  $('#content').delay(350).css({'overflow':'visible'});
})

$('.count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
    duration: 5000,
    easing: 'swing',
    step: function (now) {
      $this.text(Math.ceil(now));
    }
  });
});
