// ---------------------------Burger-menu----------------------------
const burger = document.querySelector('.header__burger-btn');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.header-bottom a');
const mobileBtn = document.querySelector('.mobile-btn');
const promoBlock = document.querySelector('.promo');
const sections = document.querySelectorAll('section');

navLink.forEach(link => {
  link.addEventListener('click', (e) => {

    sections.forEach((section) => {
      if (link.getAttribute('href') === `#${section.id}`) {
        section.style.paddingTop = header.clientHeight + 30 +'px';
      } else {
        section.style.paddingTop = '';
      }
    })
  })
})

burger.addEventListener('click', () => {
  header.classList.toggle('open');

  navLink.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(() => {
        header.classList.remove('open');
      }, 500)
      
      sections.forEach((section) => {
        if (item.getAttribute('href') === `#${section.id}`) {
          section.style.paddingTop = 100 +'px';
        }
      })
    })
  })
})

mobileBtn.addEventListener('click', () => {
    setTimeout(() => {
      header.classList.remove('open');
    }, 500)
    
    sections.forEach((section) => {
      if (mobileBtn.getAttribute('href') === `#${section.id}`) {
        section.style.paddingTop = 100 +'px';
      }
    })
})
promoBlock.style.marginTop = header.clientHeight + 'px';

// ---------------------------Слайдер----------------------------
const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: true,
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});

// ---------------------------Табуляция---------------------------
const tabsBtn = document.querySelectorAll('.gallery-tabs__btn');
const tabsItem = document.querySelectorAll('.tabs-content__item');

tabsBtn.forEach((item) => {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(item => item.classList.remove('active'));
      tabsItem.forEach(item => item.classList.remove('active'));

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  })
})

document.querySelector('.tabs-nav__btn').click();


