ymaps.ready(init);

function init() {

    const coordinates = [53.902987, 27.557666];

    let myMap = new ymaps.Map("map", {
        center: coordinates,
        zoom: 17


    })

    let myPlacemark = new ymaps.Placemark(coordinates);
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');

}
