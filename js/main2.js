$(function() {
  
  var cats = [];
  var cat = function(img, name) {
  this.imgURL = img;
  this.clickedCount = 0;
  this.name = name;
  this.admin = false;
}
  var model = {
    init: function() {
      // Loading cats here
      cats.push(new cat('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426', 'Milo'));
      cats.push(new cat('https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496', 'Stevie'));
      cats.push(new cat('https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454', 'Juju and Leito'));
      cats.push(new cat('http://stylonica.com/wp-content/uploads/2014/03/Cute-Cats-cats-33440930-1280-800.jpg', 'Lil Bob'));
      cats.push(new cat('http://stylonica.com/wp-content/uploads/2014/03/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg', 'Benji'));
      localStorage.cats = JSON.stringify(cats);
    },
    getAllCats: function() {
      return cats;
    },
    adminSetTrue: function() {
      cats[controller.currentCat].admin = true;
    },
    adminSetFalse: function() {
      cats[controller.currentCat].admin = false;
    },
    newCatInfo: function(newName, url, count) {
      var updatedCat = cats[controller.currentCat];
      updatedCat.admin = false;
      if(url != '') {
        updatedCat.imgURL = url;
      }
      if(count != '') {
        updatedCat.clickedCount = count;
      } 
      if(newName != '') {
        updatedCat.name = newName;
      };
    }
  };

  var controller = {
    init: function() {
      model.init();
      listView.init();
      displayView.init();
      this.updateDisplayView(this.currentCat);
      adminView.init();
    },
    getCats: function() {
      return model.getAllCats();
    },
    updateDisplayView: function() {
      displayView.render();
      adminView.render();
    },
    openAdminView: function(){
      model.adminSetTrue();
      adminView.render();
    },
    closeAdminview: function() {
      model.adminSetFalse();
      adminView.hide();
    },
    updateCatInfo: function(catName, imgUrl, clickCount) {
      model.newCatInfo(catName, imgUrl, clickCount);
      displayView.init();
      displayView.render();
      listView.init();
      adminView.render();
    },

    "currentCat": 0
  };

  var listView = {
    init: function() {
      var $list = $('.cat-list')
      $list.empty();
      var cats = controller.getCats();
      for (var i = 0; i < cats.length; i++) {
        // appending cat html to side cat list
        var elem = $.parseHTML("<li><a href='#'" + cats[i].name + ">" + cats[i].name + "</a></li>")[0];
        $list.append(elem);
        $(elem).on('click', (function(cat) {
          return function() {
            controller.currentCat = cat;
            controller.updateDisplayView(controller.currentCat);
          };
        })(i));
      }  
    } 
  };

  var displayView = {
    init: function() {
      $('.cat-display').empty();
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
    render: function() {
      var catName = cats[controller.currentCat].name;
      $('.cat-display .cat-template').hide();
      $("h2:contains(" + catName +")").closest('.cat-template').show();
    }
  };

  var adminView = {
    init: function() {
      $(".admin-btn").on("click", function(e){
        e.preventDefault();
        controller.openAdminView();
      })
      $(".cancel").on("click", function(e){
        controller.closeAdminview();
      })
      $(".save").on("click", function(e) {
        e.preventDefault();
        adminView.grabInputVals();
      })
    },
    render: function() {
      var $form = $("#change-form");
      if (cats[controller.currentCat].admin === true) {
        $form.show();
      }else {
        $form.hide();
      }
    },
    hide: function() {
      $("#change-form").hide();
    },
    grabInputVals: function() {
      var newCatName = $('input[name="catname"]').val();
      var newImgUrl = $('input[name="imgUrl"]').val();
      var newClickCount = $('input[name="clickCount"]').val();
      controller.updateCatInfo(newCatName, newImgUrl, newClickCount)
      $('#change-form input').val('');  
    }
  }


  controller.init();


});