import {textToRings} from "./parse.js";
import {daytime2mVm} from "./data/daytime2mVm.js";
import {daytimeHalfmVm} from "./data/daytimeHalfmVm.js";


require(["esri/config", "esri/Map", "esri/views/MapView", "esri/Graphic",
    "esri/layers/GraphicsLayer"], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
    const map = new Map({
        basemap: "streets-vector" // Basemap layer service
    });

    const view = new MapView({
        map: map,
        center: [-73.434564, 41.115097], // transmitter location
        zoom: 9, // Zoom level
        container: "viewDiv" // Div element
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    const polygon = {
        type: "polygon",
        rings: textToRings(daytime2mVm)
    };

    const distant = {
        type: "polygon",
        rings: textToRings(daytimeHalfmVm)
    };


    const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 0, 0.4],  // Orange, opacity 0%
        outline: {
            color: [255, 255, 255],
            width: 1
        }
    };

    const distantFillSymbol = {
        type: "simple-fill",
        color: [127, 0, 255, 0.3],  //Purple, opacity 30%
        outline: {
            color: [255, 255, 255],
            width: 1
        }
    };



    const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol,

    });

    const distantGraphic = new Graphic({
        geometry: distant,
        symbol: distantFillSymbol,

    });

    graphicsLayer.add(distantGraphic);
    graphicsLayer.add(polygonGraphic);
   

    const transmitterPoint = { //transmitter location
        type: "point",
        longitude: -73.434564,
        latitude: 41.115097
     };

    const transmitterMarker = {
        type: "picture-marker",
        url: "images/veritas_logo_tower.png",
        width: 53,
        height: 62
      
      };
    
     const pointGraphic = new Graphic({
        geometry: transmitterPoint,
        symbol: transmitterMarker
     });
     graphicsLayer.add(pointGraphic);

});






