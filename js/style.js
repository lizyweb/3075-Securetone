document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    // Latest-news-carousel
    $(".latest-news-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    /* slick slider
     * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        
        $('.testimonials__slider').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: "<div class=\'slick-prev\'><i class=\'im im-arrow-left\' aria-hidden=\'true\'></i></div>",
            nextArrow: "<div class=\'slick-next\'><i class=\'im im-arrow-right\' aria-hidden=\'true\'></i></div>",       
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

    };

    /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssSlickSlider();

    })();
  
    
    // Design 1
    const items = document.querySelectorAll('.facilities_item-2');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const paragraph = item.querySelector('p');
            if (paragraph) {
                paragraph.classList.toggle('hidden-para');
            }
        });
    });

document.getElementById('audioButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    var playIcon = this.querySelector('.icon-play');
    var pauseIcon = this.querySelector('.icon-pause');
    
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        audio.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
});

    
});