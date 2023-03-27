/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import $ from 'jquery';
import 'slick-carousel';

export default function slick() {
  const slidesToShowNum = 2;
  const item = $('.p-index-employee__card').length;
  if (item <= slidesToShowNum) {
    for (let i = 0; i <= slidesToShowNum + 1 - item; i++) {
      $(`.p-index-employee__card:nth-child(${i})`).clone().appendTo('.js-slick-wrapper');
    }
  }
  $('.js-slick-wrapper').slick({
    infinite: true,
    slidesToShow: slidesToShowNum,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '26.7%',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: true,
          centerPadding: '10.5%',
          autoplay: false,
          autoplaySpeed: 0,
          speed: 500,
        },
      },
    ],
  });
}
