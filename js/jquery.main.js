$(function(){
    if (window.devicePixelRatio > 1) {
        $('img').each(function () {
            this.src = this.getAttribute('data-full');
        });
    }
    $('.click-title').click(function () {
        $('.click-title').removeClass('click-title_1');
        $(this).addClass('click-title_1')
    });

    $('.panel').click(function () {
        $('.panel').children("img").css("display" , "none");
        $(this).children("img").css("display" , "block");
    });

    $(".nav a").click(function (){

        var curElem = $(this),
            curClass = curElem.attr('data-class');

        $('html, body').animate({
            scrollTop: $('.' + curClass).offset().top - 125
        }, 1000);
        return false;
    });

    $('.btn_up').on({
        'click':function(){
            $('html, body').animate({scrollTop: 0}, 600);
        }
    });

    $(window).on({
        'scroll':function(){
            if($(window).scrollTop() > $(window).height()){
                $('.btn_up').fadeIn();
            } else {
                $('.btn_up').fadeOut();
            }
            if($(window).scrollTop() + $(window).height() > $('.site__footer').offset().top + 16) {
                $('.btn_up').css({ bottom: $(window).scrollTop() + $(window).height() - $('footer').offset().top + 16 });
            } else {
                $('.btn_up').css({ bottom: '16px' });
            }
        }
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

$(window).on({
    load: function () {
        
    }
});