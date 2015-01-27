$(document).ready(function(){

  $('.cat-list li').on('click', showCat);
});

var cats = [];

// Cat object definition 
var cat = function(img, name) {
  this.imgURL = img;
  this.clickedCount = 0;
  this.name = name;
}

cats.push(new cat('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426', 'Milo'));
cats.push(new cat('https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496', 'Stevie'));
cats.push(new cat('https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454', 'Juju and Leito'));
cats.push(new cat('http://stylonica.com/wp-content/uploads/2014/03/Cute-Cats-cats-33440930-1280-800.jpg', 'Lil Bob'));
cats.push(new cat('http://stylonica.com/wp-content/uploads/2014/03/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg', 'Benji'));


for (var i = 0; i < cats.length; i++) {
  // appending cat html to side cat list
  var $elem = $.parseHTML("<li><a href='#'" + cats[i].name + "' data-catObj='" + JSON.stringify(cats[i]) + "'>" + cats[i].name +"</a></li>")[0];
  $('.cat-list').append($elem);
 
  var $templateClone = $('.cat-template').last().clone();
  addCatTemplate();
  addCountListener();  
}

function showCat(e) {
  $('.cat-list a').removeClass('active');
  e.preventDefault;
  $(this).find('a').addClass('active');
  var catName = $(this).find('a').html();
  $('.cat-display .cat-template').hide();
  $("h2:contains(" + catName +")").closest('.cat-template').show();
}

function addCatTemplate() {
  $templateClone.find('h2').html(cats[i].name);
  $templateClone.find('.cat-pic').attr('src', cats[i].imgURL);
  $templateClone.find('.count h1').html(cats[i].clickedCount);
  $templateClone.attr('data-Object', JSON.stringify(cats[i]))
  $('.cat-display').append($templateClone);
}

function addCountListener() {
  $templateClone.on('click', (function(count){
    return function() {
      var newCount = ++count;
      console.log(newCount);
      $(this).find('.count h1').html(newCount);   
    };   
  })(cats[i].clickedCount));
}



