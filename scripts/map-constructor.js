ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75416516221803, 37.62024197620109],
        zoom: 1,
        type: 'yandex#map',
        controls: [],
    }, {
        suppressMapOpenBlock: true,
        restrictMapArea: [[85.0220,-178.9], [-85.0863,181] ]
    });
    myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
            bottom: '50px',
            right: '15px'
        }
    });

    var points = [[57.372802, 61.389878], [57.374452, 61.392304], [57.375213, 61.392987], 
                  [57.37489413187298, 61.39177301331141], [57.374859, 61.391109], [57.371574, 61.390202],
                  [57.368657, 61.404359], [57.374820, 61.393283], [57.373102, 61.396104], [57.369807, 61.409551],
                  [57.373942, 61.396337]
    ];

    // Создание экземпляра маршрута.
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            points[5],
            points[0],
            points[4],
            points[3],
            points[2],
            points[1],
            points[7],
            points[10],
            points[8],
            points[6],
            points[9]
        ],
        params: {
            // Тип маршрута: пешком.
            routingMode: "pedestrian"  
        }
    }, {
        // Внешний вид путевых точек.
        wayPointStartIconColor: "#FFFFFF",
        wayPointStartIconFillColor: "#B3B3B3",
        // Внешний вид линии активного маршрута.
        routeActiveStrokeWidth: 8,
        routeActiveStrokeStyle: 'solid',
        routeActiveStrokeColor: "#990000",
        // Внешний вид линий альтернативных маршрутов.
        routeStrokeStyle: 'solid',
        routeStrokeWidth: 3,
        // Автоматическое приближение к маршруту
        boundsAutoApply: true
    });

    // Добавление маршрута на карту.
    myMap.geoObjects.add(multiRoute);

    multiRoute.model.events.add('requestsuccess', function() {
        // Коллекция путевых точек маршрута.
        var wayPoints = multiRoute.getWayPoints();

        // Проход по коллекции путевых точек.
        // Для каждой точки зададим содержимое меток.
        wayPoints.each(function (point) {   
            point.options.set({
                iconContentLayout: ymaps.templateLayoutFactory.createClass('{{ properties.request|raw }}')
            });
        });
    });

    // var geoObjects = [];
    // for (var i = 0; i < points.length; i++){
    //     placeMark = new ymaps.Placemark(points[i], 
    //         {iconContent: i + 1}, {})
    //     geoObjects[i] = placeMark;
    //     myMap.geoObjects.add(placeMark);
    // }
    
    // // кластер объединяет точки при большом удалении
    // var clusterer = new ymaps.Clusterer();
    // clusterer.add(geoObjects);
    // myMap.geoObjects.add(clusterer);
}
