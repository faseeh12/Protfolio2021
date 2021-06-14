$(document).ready(function(){
  function loaded(){
    $('.loader').css('display', 'none');
  }
  loaded();

  function animatePath(pathname, animation) {
    var path = document.querySelector(pathname);
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
      animation;
    // Go!
    path.style.strokeDashoffset = '0';
  }
  
  animatePath('#LF path', 'stroke-dashoffset 1s ease-in-out');
  animatePath('#LF-shadow path', 'stroke-dashoffset 1s ease-in-out');
  animatePath('#enton path', 'stroke-dashoffset 2s 1s ease-in-out');
  animatePath('#enton-shadow path', 'stroke-dashoffset 2s 1s ease-in-out');
})

AOS.init({
    duration: 1400
});
$(function () {
  $.srSmoothscroll({
    target: $('#widget1'),
    container: $('#container1')
  })
})

//Menubar
$('.hamburger').click(function(){
  $('.hamburger-menu').css('display','block');
})
$('.close-menu').click(function(){
  $('.hamburger-menu').css('display','none');
})


