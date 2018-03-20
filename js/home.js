document.addEventListener('DOMContentLoaded', function (event) {
  console.log('Home ready')
  let newsSwiper = new Swiper('#news-swiper', {
    navigation: {
      nextEl: '#news-swiper-button-next',
      prevEl: '#news-swiper-button-prev'
    },
    pagination: {
      el: '#news-swiper-pagination'
    }
  })
  let archiveSwiper = new Swiper('#archive-swiper', {
    navigation: {
      nextEl: '#archive-swiper-button-next',
      prevEl: '#archive-swiper-button-prev'
    },
    pagination: {
      el: '#archive-swiper-pagination'
    }
  })
})
