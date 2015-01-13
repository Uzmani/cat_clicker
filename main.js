$(document).ready(function(){
  $('.cat-pic').on('click', addCount);    
});

var catList = [];

function addCount(e) {
  console.log('clicked');
  var $target = $(e.target).siblings('.count');
  var numClicks = $target.attr('data-count');
  var newNum = parseInt(numClicks)+1;
  $target.attr('data-count', newNum);
  $target.find('h1').html(newNum);
}

// Cat object definition 

var cat = function(img, name) {
  this.imgURL = img;
  this.clickedCount = 0;
  this.name = name;
}

catList.push(new cat('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426', 'Milo'));
catList.push(new cat('https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496', 'Stevie'));
catList.push(new cat('https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454', 'Juju and Leito'));


for (var i = 0; i < catList.lenght; i++) {
  
}