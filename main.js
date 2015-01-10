$(document).ready(function(){
  console.log("this is working");
  $('.cat-pic').on('click', addCount);


});


function addCount() {
  console.log('clicked');
  var numClicks = $('#clicks').val();
  var newCount = parseInt(numClicks,10) + 1;
  $('#clicks').val(newCount);
}



