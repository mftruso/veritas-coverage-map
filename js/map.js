import { textToRings } from "./parse.js";
import { daytime2mVm } from "./data/daytime2mVm.js";
import { daytimeHalfmVm } from "./data/daytimeHalfmVm.js";
import { future } from "./data/future.js";

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Legend",
  "esri/layers/FeatureLayer",
  "esri/widgets/LayerList",
], function (
  esriConfig,
  Map,
  MapView,
  Graphic,
  GraphicsLayer,
  Legend,
  FeatureLayer,
  LayerList
) {
  const localFillSymbol = {
    type: "simple-fill",
    color: [255, 215, 0, 0.4],
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  };

  const distantFillSymbol = {
    type: "simple-fill",
    color: [127, 0, 255, 0.3], //Purple, opacity 30%
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  };

  const futureFillSymbol = {
    type: "simple-fill",
    color: [0, 255, 0, 0.3], //Purple, opacity 30%
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  };

  const features = [
    {
      geometry: {
        type: "polygon",
        rings: textToRings(daytime2mVm),
      },
      symbol: localFillSymbol,
      attributes: {
        ObjectID: 1,
      },
    },
    {
      geometry: {
        type: "polygon",
        rings: [ textToRings(daytimeHalfmVm), textToRings(daytime2mVm).reverse()],
      },

      symbol: distantFillSymbol,
      attributes: {
        ObjectID: 2,
      },
    },
    {
      geometry: {
        type: "polygon",
        rings: future[0],
      },

      symbol: futureFillSymbol,
      attributes: {
        ObjectID: 3,
      },
    },
    {
      geometry: {
        type: "polygon",
        rings: future[1],
      },

      symbol: futureFillSymbol,
      attributes: {
        ObjectID: 4,
      },
    },
  ];

  const renderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "ObjectID",
    legendOptions: {
      title: "Veritas Catholic Media Broadcast Map",
    },
    uniqueValueInfos: [
      {
        objectIdField: 1,
        symbol: localFillSymbol,
        label: "Local", // used in the legend to describe features with this symbol
      },
      {
        objectIdField: 2,
        symbol: distantFillSymbol,
        label: "Distant", // used in the legend to describe features with this symbol
      },
      {
        objectIdField: 3,
        symbol: futureFillSymbol,
        label: "Future", // used in the legend to describe features with this symbol
      },
    ],
  };

  // geometryType and spatialReference of the layer
  // will be inferred from the first feature in the array
  // if it has a geometry.
  const coverageLayer = new FeatureLayer({
    source: features, // autocast as a Collection of new Graphic()
    objectIdField: "ObjectID",
    renderer: renderer,
    listMode: "hide",
  });

  // features[1].removePoint(textToRings(daytime2mVm));

  const map = new Map({
    basemap: "streets-vector", // Basemap layer service
    layers: [coverageLayer],
  });

  const currentGraphicsLayer = new GraphicsLayer({
    listMode: "hide",
  });
  const futureGraphicsLayer = new GraphicsLayer({
    title: "Future Coverage",
    visible: false,
  });
  const graphicsLayer = new GraphicsLayer({
    listMode: "hide",
  });
  map.add(currentGraphicsLayer);
  map.add(futureGraphicsLayer);
  map.add(graphicsLayer);

  const view = new MapView({
    map: map,
    center: [-73.434564, 41.115097], // transmitter location
    zoom: 9, // Zoom level
    container: "viewDiv", // Div element
  });

  currentGraphicsLayer.add(features[0]);
  currentGraphicsLayer.add(features[1]);
  futureGraphicsLayer.add(features[2]);
  futureGraphicsLayer.add(features[3]);

  const transmitterPoint = {
    //transmitter location
    type: "point",
    longitude: -73.434564,
    latitude: 41.115097,
  };

  const transmitterMarker = {
    type: "picture-marker",
    url: "images/veritas_logo_tower.png",
    width: 53,
    height: 62,
  };

  const pointGraphic = new Graphic({
    geometry: transmitterPoint,
    symbol: transmitterMarker,
  });
  graphicsLayer.add(pointGraphic);

  const legend = new Legend({
    view: view,
    layerInfos: [
      {
        layer: coverageLayer,
      },
    ],
  });

  // Add widget to the top-left corner of the view
  view.ui.add(legend, "top-left");

  view.when(() => {
    const layerList = new LayerList({
      view: view,
    });

    // Add widget to the top right corner of the view
    view.ui.add(layerList, "top-left");
  });
});
