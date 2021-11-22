

var MYLIBRARY = MYLIBRARY || (function(){

    // var _args = ["vac", "baker"]; // private
    var final = [];
    var x = 0;

    return {

      return_list : function() {
        return final;
      },

      counter : function() {
        x++;
        return x;
      }

    };
}());
