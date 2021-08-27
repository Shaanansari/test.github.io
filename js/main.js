$(document).ready(function () {
    "use strict";
    //smooth scrolling
    $('html').smoothScroll(800);

    // new WOW().init();
    new WOW().init({mobile: true});
    //Portfolio
    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});

        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        // images have loaded

    });
    //Counter Up
    $('.counter').counterUp({delay: 10, time: 3000});
    //Image Light Box Popup
    $('.image-link').magnificPopup({type: 'image'});
    $('.video-link').magnificPopup({type: 'iframe'});
    // Animate loader off screen
    $('.se-pre-con').fadeOut('slow');

    // Show Navbar background on scroll
    $(window).scroll(function () {

        var top = $(window);
          $('.navbar').css('background', '#353c4d');
        
    });

});