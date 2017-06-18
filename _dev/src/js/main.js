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
  $(".owl-carousel[data-type='catalog']").owlCarousel({
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

  // owl-carousel products_same
  $(".owl-carousel[data-type='products_same']").owlCarousel({
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

  // owl-carousel products_viewed
  $(".owl-carousel[data-type='products_viewed']").owlCarousel({
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
	
	//
	$(".filters__input").on("change", function (e) {
		var $this = $(this),
			checked = $this.is(':checked'),
			$item = $this.parents(".filters__item"),
			$icon = $item.find(".icon");

		if( checked ) {
			$item.addClass("filters__item_active");
			$icon.removeClass("icon-checkbox_false").addClass("icon-checkbox_true");
		} else {
			$item.removeClass("filters__item_active");
			$icon.removeClass("icon-checkbox_true").addClass("icon-checkbox_false");
		}
	});
});


