let routes = {
    RED_LINE: [[57.372802, 61.389878], [57.374452, 61.392304], [57.375213, 61.392987],
                  [57.37489413187298, 61.39177301331141], [57.374859, 61.391109], [57.371574, 61.390202],
                  [57.368657, 61.404359], [57.374820, 61.393283], [57.373102, 61.396104], [57.369807, 61.409551],
                  [57.373942, 61.396337]],
    SMALL_LINE: [[57.373172, 61.396228], [57.374448, 61.392182], [57.376141, 61.402363],
                  [57.364476, 61.429635], [57.361873, 61.386270]],
    LARGE_LINE: [[57.370764, 61.403470], [57.370756, 61.403237], [57.373776, 61.394825],
                  [57.373776, 61.394825], [57.374082, 61.391450], [57.366990, 61.367856],
                  [57.363995, 61.347761]],
};

let routes_with_curves = {
    RED_LINE: [
        {
            POINT: [57.372802, 61.389878],
            CURVES: [
                [57.372912, 61.389718],
                [57.373132, 61.390601],
                [57.374390, 61.389535],
                [57.374390, 61.389535],
            ],
        },
        {
            POINT: [57.374859, 61.391109],
            CURVES: [
                [57.374712, 61.391208],
                [57.374856, 61.391970],
                [57.375007, 61.391871],
            ],
        },
        {
            POINT: [57.37489413187298, 61.39177301331141],
            CURVES: [
                [57.375004, 61.391869],
                [57.374854, 61.391971],
                [57.374445, 61.389798],
                [57.374298, 61.389998],
                [57.374640, 61.391818],
                [57.374392, 61.391954],
            ],
        },
        {
            POINT: [57.374452, 61.392304],
            CURVES: [
                [57.374396, 61.391959],
                [57.374644, 61.391815],
                [57.374299, 61.389990],
                [57.374448, 61.389796],
                [57.375063, 61.393150],
            ],
        },
        {
            POINT: [57.375213, 61.392987],
            CURVES: [
                [57.375053, 61.393152],
                [57.374443, 61.389796],
                [57.374293, 61.389995],
                [57.374910, 61.393222],
            ],
        },
        {
            POINT: [57.374820, 61.393283],
            CURVES: [
                [57.374910, 61.393223],
                [57.374971, 61.393548],
                [57.374757, 61.394335],
                [57.374752, 61.394535],
                [57.374369, 61.394642],
                [57.374277, 61.394921],
                [57.373918, 61.395362],
                [57.374016, 61.395726],
                [57.373899, 61.396075],
            ],
        },
        {
            POINT: [57.373942, 61.396337],
            CURVES: [
                [57.373900, 61.396079],
                [57.373755, 61.396459],
                [57.373593, 61.396274],
                [57.370577, 61.407612],
                [57.370409, 61.407487],
                [57.370071, 61.409004],
            ],
        },
        {
            POINT: [57.369807, 61.409551],
            CURVES: [
                [57.370070, 61.408997],
                [57.370565, 61.406313],
                [57.369420, 61.403613],
                [57.368692, 61.404457],
            ],
        },
        {
            POINT: [57.368657, 61.404359],
            CURVES: [
                [57.368694, 61.404457],
                [57.369526, 61.403459],
                [57.370188, 61.403815],
                [57.370440, 61.403081],
                [57.371063, 61.402965],
                [57.371300, 61.402703],
                [57.373395, 61.396285],
                [57.373277, 61.396115],
            ],
        },
        {
            POINT: [57.373102, 61.396104],
            CURVES: [
                [57.373278, 61.396114],
                [57.373395, 61.396282],
                [57.373666, 61.395460],
                [57.372327, 61.392403],
                [57.372385, 61.392330],
                [57.371745, 61.390283],
                [57.371608, 61.390372],
            ],
        },
        {
            POINT: [57.371574, 61.390202]
        }
    ],

    SMALL_LINE: [
        {
            POINT: [57.373172, 61.396228],
            CURVES: [
                [57.373283, 61.396112],
                [57.373398, 61.396282],
                [57.374003, 61.394275],
                [57.374173, 61.394132],
                [57.373736, 61.392313],
                [57.374392, 61.391960],
            ],
        },
        {
            POINT: [57.374448, 61.392182],
            CURVES: [
                [57.373732, 61.392310],
                [57.374350, 61.394736],
                [57.374310, 61.394842],
                [57.375801, 61.395868],
                [57.376678, 61.397235],
                [57.376714, 61.397455],
                [57.377408, 61.397894],
                [57.378029, 61.398762],
                [57.377948, 61.399087],
                [57.377831, 61.399943],
                [57.376324, 61.402674],
                [57.376242, 61.402541],
            ],
        },
        {
            POINT: [57.376141, 61.402363],
            CURVES: [
                [57.376324, 61.402671],
                [57.377834, 61.399946],
                [57.378028, 61.398787],
                [57.377387, 61.397875],
                [57.376710, 61.397452],
                [57.376686, 61.397241],
                [57.375801, 61.395847],
                [57.374310, 61.394827],
                [57.374282, 61.394920],
                [57.374282, 61.394920],
                [57.370578, 61.407608],
                [57.370410, 61.407493],
                [57.365237, 61.428680],
                [57.364627, 61.428604],
                [57.364248, 61.429339],
                [57.364351, 61.429708],
                [57.364466, 61.429745],
            ],
        },
        {
            POINT: [57.364476, 61.429635],
            CURVES: [
                [57.364467, 61.429746],
                [57.364351, 61.429706],
                [57.364246, 61.429339],
                [57.364642, 61.428605],
                [57.365236, 61.428680],
                [57.370572, 61.406350],
                [57.362157, 61.387293],
                [57.362160, 61.387136],
                [57.361884, 61.386590]
            ],
        },
        {
            POINT: [57.361873, 61.386270],
        },
    ],

    LARGE_LINE: [
        {
            POINT: [57.370764, 61.403470],
        },
        {
            POINT: [57.370756, 61.403237],
            CURVES: [
                [57.370749, 61.403023],
                [57.371064, 61.402967],
                [57.371299, 61.402702],
                [57.371299, 61.402702],
            ],
        },
        {
            POINT: [57.373776, 61.394825],
            CURVES: [
                [57.373855, 61.394918],
                [57.374019, 61.394427],
                [57.374000, 61.394277],
                [57.374173, 61.394136],
                [57.373732, 61.392309],
                [57.374481, 61.391912],
            ],
        },
        {
            POINT: [57.374509, 61.392052],
            CURVES: [
                [57.374480, 61.391913],
                [57.374179, 61.392056],
            ],
        },
        {
            POINT: [57.374082, 61.391450],
            CURVES: [
                [57.374178, 61.392051],
                [57.373736, 61.392301],
                [57.367847, 61.368443],
                [57.367434, 61.368538],
                [57.367282, 61.367661],
            ],
        },
        {
            POINT: [61, 57.366990, 61.367856],
            CURVES: [
                [57.367279, 61.367670],
                [57.366932, 61.366587],
                [57.366912, 61.365948],
                [57.367244, 61.365726],
                [57.364330, 61.347851],
                [57.364133, 61.347690]
            ],
        },
        {
            POINT: [57.363995, 61.347761],
        },
    ]
};

document.getElementById("routes").onchange = function(evt) {
    let route = routes[evt.target.value];
    init(route);
    ymaps.ready(init);
};

init(routes[0]);
ymaps.ready(init);

function init(route){
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

    let points = route;

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
        routeActiveStrokeWidth: 2,
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
}