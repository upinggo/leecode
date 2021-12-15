// media 
const media = document.querySelector('video');
const play = document.querySelector('#play');
play.addEventListener('click', function () {
    media.style.opacity = 1;
    media.play();
    play.style.display = 'none';
});
media.addEventListener('pause', function () {
    media.style.opacity = 0;
    play.style.display = 'block';
});

var swiper1 = new Swiper('#swiper-container-1', {
    initialSlide: 2,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    }
});

// swiper 
var swiper2 = new Swiper('#swiper-container-2', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});


// swiper 
var swiper3 = new Swiper('#swiper-container-3', {
    slidesPerView: 1, 
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});