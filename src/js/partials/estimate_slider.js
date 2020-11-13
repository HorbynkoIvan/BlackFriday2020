export function estimateSlider() {
    let $slider = $('.estimate .slider');

    $slider.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="arrow_left" src="https://cdn.parfums.ua/public/upload/newAdminUpload/RichContent/900542/arrow_left.svg"/>',
        nextArrow: '<img class="arrow_right" src="https://cdn.parfums.ua/public/upload/newAdminUpload/RichContent/900542/arrow_right.svg"/>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
}