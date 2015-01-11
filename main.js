$(document).ready(function(){
  console.log("this is working");
  $('.cat-pic').on('click', addCount);    
});


function addCount() {
  console.log('clicked');
  var $el = $('.count');
  var numClicks = $el.attr('data-count');
  var newNum = parseInt(numClicks)+1;
  $el.attr('data-count', newNum);
  $('.count h1').html(newNum);
}

// Cat object definition 

function cat(img) {
  this.imgURL = img;
  this.clickedCount = 0;
  this.name
}



