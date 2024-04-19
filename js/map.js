type="text/javascript"
      ymaps.ready(init);
      function init(){
        var myMap = new ymaps.Map("map", {
          center: [48.872185, 2.354224],
          zoom: 12
        });

        var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'placemark.svg',
          iconImageSize: [28, 40],
          iconImageOffset: [-3, -42],
        });
        myMap.geoObjects.add(myPlacemark);
      }
