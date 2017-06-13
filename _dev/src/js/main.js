'use strict';

$(function () {

  // Инициализация скрипта
  Smooth_Scroll.init();
  
  // owl-carousel new
  $(".owl-carousel[data-type='category_new']").owlCarousel({
  	items: 1,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right owl-nav_arrow'></span>"
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
  		"<span class='fa fa-chevron-left owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right owl-nav_arrow'></span>"
  	]
  });

  // owl-carousel videos
  $(".owl-carousel[data-type='videos']").owlCarousel({
  	items: 1,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right owl-nav_arrow'></span>"
  	]
  });

  // owl-carousel products_new
  $(".owl-carousel[data-type='products_new']").owlCarousel({
  	items: 4,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right owl-nav_arrow'></span>"
  	]
  });

  // owl-carousel products_sale
  $(".owl-carousel[data-type='products_sale']").owlCarousel({
  	items: 4,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right owl-nav_arrow'></span>"
  	]
  });

  // owl-carousel products_offers
  $(".owl-carousel[data-type='products_offers']").owlCarousel({
  	items: 4,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right owl-nav_arrow'></span>"
  	]
  });
});


