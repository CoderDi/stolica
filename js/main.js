$(document).ready(function(){


  $(".js-getcall").click(function(){
    $(".popup-block").hide();
    $("#popup-getcall").show();
    $(".popup").addClass("popup--show");
  });
  $(".js-getras").click(function(){
    $(".popup-block").hide();
    $("#popup-ras").show();
    $(".popup").addClass("popup--show");
  });
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
  });

  $(".label").click(function(){
    $(this).find(".label__placeholder").hide();
  });
  $(".input").focusout(function(){
    if (($(this).val() == "") || !(/(.*\d.*){11}/.test($(this).val()))) {
      $(this).parent(".label").find(".label__placeholder").show();
    }
  });



  $(".js-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    draggable: false
  });

  function windowsSlider() {
    if ($(window).width() <= 960) {
      if (($(".three__wrapper").length != 0) && !($(".three__wrapper").hasClass("slick-slider"))) {
        $(".three__wrapper").slick({
          infinite: false,
          arrows: true
        });
      }
    } else {
      if (($(".three__wrapper").length != 0) && ($(".three__wrapper").hasClass("slick-slider"))){
        $(".three__wrapper").slick('unslick');
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