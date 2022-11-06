ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [57.372, 61.398],
        zoom: 16,
        controls: []
    });
    myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
            bottom: '50px',
            right: '15px'
        }
    });

    var points = [
        {coordinates: [57.372802, 61.389878], name: 'Торговый центр «Усадьба»'},
        {coordinates: [57.374452, 61.392304], name: 'Режевской исторический музей'}, 
        {coordinates: [57.375213, 61.392987], name: 'Магазин «Золотая шайба»'}, 
        {coordinates: [57.37489413187298, 61.39177301331141], name: 'Храм Иоанна Кронштадтского'}, 
        {coordinates: [57.374859, 61.391109], name: 'Земская управа'}, 
        {coordinates: [57.371574, 61.390202], name: 'Усадьба И. Г. Байбородина'},
        {coordinates: [57.368657, 61.404359], name: 'Дом А. М. Ушакова'}, 
        {coordinates: [57.374820, 61.393283], name: 'Волостное правление'}, 
        {coordinates: [57.373102, 61.396104], name: 'Господский дом'}, 
        {coordinates: [57.369807, 61.409551], name: 'Двухклассное земское училище'},
        {coordinates: [57.373942, 61.396337], name: 'Контора Режевского завода'}
    ];

    var geoObjects = [];
    for (var i = 0; i < points.length; i++){
        placeMark = new ymaps.Placemark(points[i].coordinates, 
            {iconContent: i + 1, balloonContentBody: points[i].name}, {})
        geoObjects[i] = placeMark;
        myMap.geoObjects.add(placeMark);
    }

    var curveRoute = new ymaps.Polyline([
        points[0].coordinates,
        points[4].coordinates,
        points[3].coordinates,
        points[1].coordinates,
        points[2].coordinates,
        points[7].coordinates,
        points[10].coordinates,
        points[9].coordinates,
        points[6].coordinates,
        points[8].coordinates,
        points[5].coordinates
    ]);
    myMap.geoObjects.add(curveRoute);

    // кластер объединяет точки при большом удалении
    var clusterer = new ymaps.Clusterer();
    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);
}