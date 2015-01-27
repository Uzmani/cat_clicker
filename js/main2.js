// $(function() {
  
  var cats = [];
  var cat = function(img, name) {
  this.imgURL = img;
  this.clickedCount = 0;
  this.name = name;
}
  var model = {
    init: function() {
      // Loading cats here
      cats.push(new cat('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426', 'Milo'));
      cats.push(new cat('https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496', 'Stevie'));
      cats.push(new cat('https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454', 'Juju and Leito'));
      cats.push(new cat('http://stylonica.com/wp-content/uploads/2014/03/Cute-Cats-cats-33440930-1280-800.jpg', 'Lil Bob'));
      cats.push(new cat('http://stylonica.com/wp-content/uploads/2014/03/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg', 'Benji'));
    },
    getAllCats: function() {
      return cats;
    }
  };

  var controller = {
    init: function() {
      model.init();
      listView.init();
      displayView.init();
    },
    getCats: function() {
      return model.getAllCats();
    },
    updateDisplayView: function(catName) {
      displayView.displayCat(catName)
    }
  };

  var listView = {
    init: function() {
      var cats = controller.getCats();
      for (var i = 0; i < cats.length; i++) {
        // appending cat html to side cat list
        var $elem = $.parseHTML("<li><a href='#'" + cats[i].name + ">" + cats[i].name + "</a></li>")[0];
        $('.cat-list').append($elem);
        $('.cat-list li').on('click', (function(catName) {
          return function() {
            controller.updateDisplayView(catName);
            console.log(catName);
          };
        })(cats[i].name))
      }
    }

  };

  var displayView = {
    init: function() {
      for (var i = 0; i < cats.length; i++) {
        var $templateClone = $('.cat-template').last().clone();
        $templateClone.find('h2').html(cats[i].name);
        $templateClone.find('.cat-pic').attr('src', cats[i].imgURL);
        $templateClone.find('.count h1').html(cats[i].clickedCount);
        $('.cat-display').append($templateClone);
        $templateClone.on('click', (function(cat) {
          return function() {
            cat.clickedCount = ++cat.clickedCount;
            $(this).find('.count h1').html(cat.clickedCount);
          };
        })(cats[i]));
      }

    },
    displayCat: function(catName) {
      // console.log(catName);
      $('.cat-display .cat-template').hide();
      $('.cat-template').each(function(i){
        if (catName === $(this).find('h2').text()) {
          $(this).show();
        }
      });
    }

  };


  controller.init();


// });