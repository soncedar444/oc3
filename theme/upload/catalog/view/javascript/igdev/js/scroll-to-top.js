/* Scroll to top button*/
$(document).ready(function () {
    
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('#scroll-to-top').show();
        } else {
            $('#scroll-to-top').hide();
        }
    });

    $('#scroll-to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});