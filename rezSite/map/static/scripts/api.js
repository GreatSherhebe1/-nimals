URL = 'http://127.0.0.1:8000/map/api/point'

let points = []
let routes = {}
let descriptions = {}

async function getPoints()
{
    fetch(URL, {
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        points = data;
        renderRoutes();
    })
}

const renderRoutes = () => {
    points.forEach((point) => {
        if (point.description in routes) {
            routes[point.description].push([point.x, point.y]);
        } else {
            routes[point.description] = [[point.x, point.y]];
        }

        if (point.description in descriptions) {
            descriptions[point.description].push({
                ROUT: point.description,
                NAME: point.name,
                DESCRIPTION: point.Описание,
                PICTURE: point.picture,
            });
        } else {
            descriptions[point.description] = [{
                ROUT: point.description,
                NAME: point.name,
                DESCRIPTION: point.Описание,
                PICTURE: point.picture,
            }];
        }
    })
    ymaps.ready(init);
};

const closeDescription = () => {
    document.querySelector('.point-description').classList.add('hidden');
}

function documentKeydownHandler (evt) {
    if (evt.key === 'Escape') {
        closeDescription();
    }
}
  
const addCloseHandlers = () => {
    document.querySelector('.close_button').addEventListener('click', closeDescription);
    document.addEventListener('keydown', documentKeydownHandler);
}

addCloseHandlers();

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
    let routeName;

    document.getElementById("routes").addEventListener('change', function(evt) {
        document.querySelector('.point-description').classList.add('hidden');
        if (linkRoute != null){
            myMap.geoObjects.remove(linkRoute);
        }
        let route = routes[evt.target.value];
        routeName = evt.target.value;
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
    });

    const fillDescription = (pointIndex) => {
        let h1Element = document.querySelector('.text').querySelector('h1');
        let pElement = document.querySelector('.text').querySelector('p');
        let imgElement = document.querySelector('.point-description').querySelector('img');
        h1Element.textContent = descriptions[routeName][pointIndex].NAME;
        pElement.textContent = descriptions[routeName][pointIndex].DESCRIPTION;
        imgElement.src = descriptions[routeName][pointIndex].PICTURE;
        showDescription();
    }

    const showDescription = () => {
        document.querySelector('.point-description').classList.remove('hidden');
    }

    const addPointsHandlers = () => {
        let myPoints = document.querySelectorAll('.ymaps-2-1-79-placemark-overlay');
        myPoints.forEach((myPoint) => {
            myPoint.onclick = function() {
                fillDescription(myPoint.querySelector('.ymaps-2-1-79-route-pin__label').className[myPoint.querySelector('.ymaps-2-1-79-route-pin__label').className.indexOf('RouterWayPointSmallLetter') + 25]);
            };
        })
    }

    document.getElementById("routes").addEventListener('change', function() {
        setTimeout(addPointsHandlers, 1000)
    });
}

getPoints();
