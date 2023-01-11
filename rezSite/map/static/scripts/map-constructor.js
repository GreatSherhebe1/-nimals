let url = 'http://127.0.0.1:8000/map/api/point';

let array = undefined;

async function test()
{
    await fetch(url, {
      method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        array = [];
        for (let i = 0; i < json.length; i++) {
            array.push(new Array(json[i]['x'], json[i]['y'], json[i]['description']))
        };
        console.log(array);
    });
}

test();

// fetch(url, {
//   method: 'GET'
// })
// .then(function(response) { return response.json(); })
// .then(function(json) {
//     window.array = [];
//     for (let i = 0; i < json.length; i++) {
//         array.push(new Array(json[i]['x'], json[i]['y'], json[i]['description']))
//     };
//     console.log(array);
// });

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

    var linkRoute;

    document.getElementById("routes").onchange = function(evt) {
        if (linkRoute != null){
            myMap.geoObjects.remove(linkRoute);
        }
        let route = routes[evt.target.value];
        let myRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: route,
            params: {
                routingMode: "pedestrian",
                viaPointVisible: true,
                viaPointIconRadius: 7,
                viaPointIconFillColor: "#000088",
                viaPointActiveIconFillColor: "#E63E92",
                routeActiveMarkerVisible: false,
                routeOpenBalloonOnClick: false,
            }
        }, {
            routeOpenBalloonOnClick: false,
            routeActiveMarkerVisible: false,
            viaPointVisible: true,
            viaPointIconRadius: 7,
            viaPointIconFillColor: "#000088",
            viaPointActiveIconFillColor: "#E63E92",
            wayPointStartIconColor: "#FFFFFF",
            wayPointStartIconFillColor: "#B3B3B3",
            routeActiveStrokeWidth: 2,
            routeActiveStrokeStyle: 'solid',
            routeActiveStrokeColor: "#990000",
            routeStrokeStyle: 'solid',
            routeStrokeWidth: 3,
            boundsAutoApply: true
        });
        myMap.geoObjects.add(myRoute);
        linkRoute = myRoute;
    };
}