const navBtn = document.querySelector('.nav_button');
const mobileNav = document.querySelector('.header_nav');
const navHamburger = document.querySelector('.hamburger');
const body = document.body;
const navLink = document.querySelectorAll('.header_nav__list-item')

navHamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMobileNav()
})

mobileNav.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    navHamburger.classList.remove('open');
    mobileNav.classList.remove('header_nav__active');
    body.classList.remove('no-scroll');
}

function toggleMobileNav() {
    navHamburger.classList.toggle('open');
    mobileNav.classList.toggle('header_nav__active');
    body.classList.toggle('no-scroll');
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        576: {
            slidesPerView: 2,
        },

        776: {
            slidesPerView: 3,
            spaceBetween: 35
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 54
        }
    },

    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    }
});


document.querySelectorAll('.accordion_item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion_item__active')) {
            parent.classList.remove('accordion_item__active')
        } else {
            document
                .querySelectorAll('.accordion_item')
                .forEach((child) => child.classList.remove('accordion_item__active'))

            parent.classList.add('accordion_item__active')

        }

    })
)

AOS.init({
    disable: 'phone',
    disable: 'tablet',
    disable: 'mobile',
});
