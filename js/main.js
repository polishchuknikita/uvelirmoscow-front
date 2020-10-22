$( document ).ready(function() {

  $('.section-repairs__img-list').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

  $('.section-katalog-info__btn_full').click( function() {
    $('.section-katalog-info').addClass('show-info');
  });
  $('.section-katalog-info__btn_small').click( function() {
    $('.section-katalog-info').removeClass('show-info');
  });
  
  $('.client-material__btn_full').click( function() {
    $('.client-material__text-list').addClass('show-info');
  });
  $('.client-material__btn_small').click( function() {
    $('.client-material__text-list').removeClass('show-info');
  });


  // Modal repairs-li
  $('.section-repairs__btn_first').click(function (e) {
    e.preventDefault();
    $('#repairs-modal-li-first').arcticmodal();
  });
  $('.section-repairs__btn_second').click(function (e) {
    e.preventDefault();
    $('#repairs-modal-li-second').arcticmodal();
  });
  $('.section-repairs__btn_third').click(function (e) {
    e.preventDefault();
    $('#repairs-modal-li-third').arcticmodal();
  });
  $('.section-repairs__btn_fourth').click(function (e) {
    e.preventDefault();
    $('#repairs-modal-li-fourth').arcticmodal();
  });

  // Zakaz slider-first
  $('.content1b-list-slider').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

  // Zakaz slider-second
  $('.s3s-slider-list').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

  // Shipping page slider
  $('.section-shipping-page__list-reviews').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
  });

  // Client material slider
  $('.client-material__info-item-slider').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

   // Izdeliya v nalichii slider item
  $('.izdeliya-v-nalichii-list-img-list').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

// Nashi-raboti card slider
  $('.nashi-raboti-card-slider').slick({
    dots: false,
    autoplay: false,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

 // Akciya slider v nalichii
  $('.slider-v-nalichii-akciya').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 1200,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });



  // Product card slider
    $('.product-card-slider-list-solo-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-card-slider-list'
    });
    $('.product-card-slider-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-card-slider-list-solo-img',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      vertical: true,
      draggable: false
    });


    $(function(){
      $('#modal-tovar').arcticmodal();
    });



});

            