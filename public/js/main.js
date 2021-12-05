
$(document).ready(function () {
    // call widget
    function callBtn() {
        let icon = $('#call_widget');
        let iconDiv = $('#call_widget .call-btn');
        if(iconDiv.style.display == "none"){
            iconDiv.style.display == " ";
        }else{
            iconDiv.style.display == "none";
        }
    }
    // End call widget
    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
    // :: 7.0 Barfiller Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
    }

    // Initialize and add the map
    function initMap() {
        // The location of JP

        constJP = { lat: 23.265091775530053, lng: 77.4246333120297 };
        // The map, centered at JP
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: JP,
        });
        // The marker, positioned at JP
        const marker = new google.maps.Marker({
            position: JP,
            map: map,
        });
    }

 
});