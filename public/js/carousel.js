$(document).ready(function() {
  $('#myCarousel,#myCarousel2,#myCarousel3').carousel({
  interval: 10000
  })
    
    $('#myCarousel,#myCarousel2,#myCarousel3').on('slid.bs.carousel', function() {
      //alert("slid");
  });
    
    
});



