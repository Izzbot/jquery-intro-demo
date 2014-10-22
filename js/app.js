/* app.js
* main script file for our little application
* */

"use strict";

// Main application
function onReady() {

    // Hide images and fade in
    $('img').hide().fadeIn(1000);

    // Make relevant a links open in a new window
    $('p a[href!="#top"]').attr('target', '_blank');

    // animate the scrolling to sections
    $('nav a, p a[href="#top"]').click(function(eventObject) {
        eventObject.preventDefault();
        var targetElement = $(this.hash);
        // You need to select html,body to work in different browsers
        $('html,body').animate({scrollTop: targetElement.offset().top - navHeight - 10}, 1000);
    });

    // Fix the nav bar
    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPH = $('.nav-placeholder');

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPH.height(navHeight);
            navPH.show();
        } else {
            nav.removeClass('nav-fixed');
            navPH.height(0);
            navPH.hide();
        }
    });

    // Set up the bootstrap modal
    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();
    });

    // Confirm the Exit
    $('#confirm-exit-button').click(function() {
        window.location = 'http://www.bing.com';
    });
}












// once the js file is loaded, call onReady
$(onReady);