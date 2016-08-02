$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})