'use strict';

$(function () {

  // Инициализация скрипта
  Smooth_Scroll.init();
  
  // owl-carousel new
  $(".owl-carousel[data-type='new']").owlCarousel({
  	items: 1,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left fa-2x owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right fa-2x owl-nav_arrow'></span>"
  	]
  });

  // owl-carousel category
  $(".owl-carousel[data-type='category']").owlCarousel({
  	items: 3,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left fa-2x owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right fa-2x owl-nav_arrow'></span>"
  	]
  });
});


