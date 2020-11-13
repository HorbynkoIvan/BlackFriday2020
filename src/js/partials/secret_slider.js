export function secretsSlider() {
    let $slider = $('.secrets .slider');

    $slider.slick({
        infinite: false,
        slidesToShow: 1,
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
                    arrows: false,
                    dots: true
                }
            }
        ]
    })
    //     .on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //     $('.secrets .slick-current iframe').attr('src', $('.secrets .slick-current iframe').attr('src'));
    // });
}