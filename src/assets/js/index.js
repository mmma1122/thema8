import '../sass/index.scss';
import 'slick-carousel/slick/slick.css'; // 追加

import $ from 'jquery';
import slick from './slick';
import hamburger from './hamburger';

slick();
hamburger();

$(() => {
  console.log('hello world!');
});
