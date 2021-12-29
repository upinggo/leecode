// swiper 
var swiper3 = new Swiper('#swiper-container-1', {
    slidesPerView: 1, 
    pagination: {
        clickable: true,
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});