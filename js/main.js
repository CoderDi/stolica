$(document).ready(function(){

  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".popup-block").hide();
      $("#popup-success").show();
      $(".popup").addClass("popup--show");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
  });


  $(".js-getcall").click(function(){
    $(".popup-block").hide();
    $("#popup-getcall").show();
    $(".popup").addClass("popup--show");
  });
  $(".js-office").click(function(){
    $(".popup-block").hide();
    $("#popup-office").show();
    $(".popup").addClass("popup--show");
  });
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
  });

  $(".butter").click(function(){
    $(this).addClass("butter--open");
    $(".menu").addClass("menu--open");
  });
  $(".menu-close").click(function(){
    $(".menu").removeClass("menu--open");
  });
  $(".menu__item_arrow").click(function(){
    $(this).toggleClass("menu__item_arrow--open");
    $(this).parent(".menu__item").find(".menu__drop").toggleClass("menu__drop--open");
  });

  $(".label").click(function(){
    $(this).find(".label__placeholder").hide();
  });
  $(".input").focusout(function(){
    if (($(this).val() == "") || !(/(.*\d.*){11}/.test($(this).val()))) {
      $(this).parent(".label").find(".label__placeholder").show();
    }
  });

  $("#pod-usadku").click(function(){
    $(".komplects__block").hide();
    $(".komplects__block--usadka").show();
  });
  $("#pod-kluch").click(function(){
    $(".komplects__block").hide();
    $(".komplects__block--kluch").show();
  });



  $(".js-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    adaptiveHeight: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.js-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-slider-nav'
  });
  $('.js-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-slider-for',
    dots: false,
    arrows: true,
    focusOnSelect: true
  });

  function windowsSlider() {
    if ($(window).width() <= 960) {
      if (($(".preim__wrapper").length != 0) && !($(".preim__wrapper").hasClass("slick-slider"))) {
        $(".preim__wrapper").slick({
          infinite: false,
          arrows: true
        });
      }
    } else {
      if (($(".preim__wrapper").length != 0) && ($(".preim__wrapper").hasClass("slick-slider"))){
        $(".preim__wrapper").slick('unslick');
      }
    }
  }
  windowsSlider();
  $(window).resize(function(){
    windowsSlider();
  })





  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });
  
  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });
  $('form input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
        $(this).parents("form").find("input[type='submit']").attr("disabled", false);
    } else {
        $(this).parents("form").find("input[type='submit']").attr("disabled", true);
    }
  });

  if ($("#map").length != 0) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
            center: [56.643702, 47.986668],
            zoom: 10,
            controls: []
          }),
          
          myPlacemark = new ymaps.Placemark([56.637164, 47.884256], {
            hintContent: 'Адрес офиса: бульвар Победы, 5',
            balloonContent: 'Адрес офиса: бульвар Победы, 5'
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/pin-map.png',
            iconImageSize: [55, 69],
            iconImageOffset: [-27, -69]
          });
          myPlacemark2 = new ymaps.Placemark([56.642115502854054,48.09462169320679], {
            hintContent: 'Адрес производства: деревня Паганур',
            balloonContent: 'Адрес производства: деревня Паганур'
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/pin-map.png',
            iconImageSize: [55, 69],
            iconImageOffset: [-27, -69]
          });
          
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(myPlacemark);
      myMap.geoObjects.add(myPlacemark2);
    });
  }  
});