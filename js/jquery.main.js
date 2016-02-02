$(function(){

    $('.panel-title').click(function () {
       $(this).toggleClass("panel-title_1");
    });

} );

var Shablon = function (obj) {
    this.obj = obj;


    this.init();
};
Shablon.prototype = {
    init: function () {
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function () {
        var self = this;

        return {
            addEvents: function () {

            },
            build: function () {
                self.core.addEvents();
            }
        };
    }
};

$('#slide_up').on({
    'click':function(){
        $('html, body').animate({scrollTop: 0}, 600);
    }
});



$(window).on({
    load: function () {
        
    }
});