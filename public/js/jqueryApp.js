// carousel
$(function() {
    carousel('.slider-banner-prod', 0, [1, 1, 1, 1]);
    carousel('.feedback-slider', 1, [1, 1, 1, 1]);

    function carousel(carouselName, margin, responArr) {
        let carousel = $(carouselName);
        $(carousel).owlCarousel({
            loop: true,
            margin: margin,
            nav: true,
            responsive: {
                0: {
                    items: responArr[0]
                },
                768: {
                    items: responArr[1]
                },
                1000: {
                    items: responArr[2]
                },
                1200: {
                    items: responArr[3]
                }
            }
        })
    }
});

$(function() {
    carousel('.video-slider-wrap', 30);

    function carousel(carouselName, margin) {
        let carousel = $(carouselName);
        $(carousel).owlCarousel({
            loop: true,
            margin: margin,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
            }
        })
    }
});
$(function() {
    carousel('.slider-treding-hidden', 1);

    function carousel(carouselName, margin) {
        let carousel = $(carouselName);
        $(carousel).owlCarousel({
            loop: true,
            margin: margin,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
});