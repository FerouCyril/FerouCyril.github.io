$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

     new WOW().init();
     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });


    //animated header class
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      30,
            'month':    12,
            'year':     2018,
            'hour':     23,
            'min':      59,
            'sec':      59,
        },
        omitWeeks: true
    });
});
