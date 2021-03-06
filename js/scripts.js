const header = document.querySelector('.section-header');
const scrollNav = document.getElementById('main-navigation');

document.querySelector('.faq-accordion').addEventListener('click', (e) => {
    if(e.target.closest('.faq-accordion__item')){
        e.target.closest('.faq-accordion__item')
            .classList.toggle('faq-accordion__item--active');
    }
});

document.querySelector('.btn-burger').addEventListener('click', (e) => {
    header.classList.toggle('section-header--active-nav');

    if(header.classList.contains('section-header--active-nav')){
        hideScroll();
    } else{
        showScroll();
    }
});

const hideScroll = () =>{
    const scrollWidth = `${getScrollbarWidth()}px`;
    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    scrollNav.style.paddingRight = scrollWidth;
};
const showScroll = (e) =>{
        document.body.style.paddingRight = '';
        document.body.style.overflow = 'visible';

    scrollNav.style.paddingRight = '';
};

const resetNav = () =>{
    header.classList.remove('section-header--active-nav');
    showScroll();

}
window.addEventListener('resize', resetNav);
//get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow= 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarWidth;
};

new Swiper('.section-hero-image', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

new Swiper('.slider-blog-container', {
    loop: true,
    pagination: {
        el: '.section-blog .dots',
        clickable: true
    },

    navigation: {
        nextEl: '.btn-blog--next',
        prevEl: '.btn-blog--prev',
    },
});

new Swiper('.slider-quotes-container', {
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.section-quotes .dots',
        clickable: true
    },breakpoints: {
        "700": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "320": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});