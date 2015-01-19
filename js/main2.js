$(function() {
  

  var model = {
    init: function() {
      var cats = []
    },
    loadCats: function(imgUrl, catName) {
      cats.push({
        img: imgUrl, 
        name: catName,
        clickCount: 0;
      });
    }

  }

  var controller = {
    init: function() {
      model.loadCats();
    },

      );

    model.init();
    ListView.init();
    DisplayView.init();
  }

  var catListView = {

  }

  var catDisplayView = {


  }





})