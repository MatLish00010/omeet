ymaps.ready(init);

function init() {

    const coordinates = [53.908586, 27.556387];

    let myMap = new ymaps.Map("map", {
        center: coordinates,
        zoom: 17


    })

    let myPlacemark = new ymaps.Placemark(coordinates);
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');

}
