import $ from 'jquery';

export default function hamburger() {
  $('.l-header__hamburger').click(function () {
    $(this).toggleClass('active');
    $('#g-nav').toggleClass('panelactive');
  });

  $('#g-nav a').click(() => {
    $('.l-header__hamburger').removeClass('active');
    $('#g-nav').removeClass('panelactive');
  });
}
