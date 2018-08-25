ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.93912633838372,30.322121091262822],
    zoom: 17,
    controls: ['rulerControl']
  });

  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
        bottom: '100px',
        right: '10px'
    }
  });

  myMap.controls.add('fullscreenControl', {
    float: 'none',
    position: {
        bottom: '50px',
        right: '10px'
    }
  });

  myMap.controls.remove('rulerControl');

  var myPlacemark = new ymaps.Placemark([59.938777700539546,30.3229872462131], {
    hintContent: 'Студия находится здесь',
    balloonContent: 'Приходите по адресу ул. Большая Конюшенная, д. 19/8'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-45, -180]
  });

  myMap.geoObjects.add(myPlacemark);
});
