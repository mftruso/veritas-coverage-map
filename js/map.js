import { textToRings } from "./parse.js";
import { daytime2mVm } from "./data/daytime2mVm.js";
import { daytimeHalfmVm } from "./data/daytimeHalfmVm.js";

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Legend",
  "esri/layers/FeatureLayer",
], function (
  esriConfig,
  Map,
  MapView,
  Graphic,
  GraphicsLayer,
  Legend,
  FeatureLayer
) {
  const localFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 0, 0.4], // Orange, opacity 40%
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

  const features = [
    {
      geometry: {
        type: "polygon",
        rings: textToRings(daytime2mVm),
      },
      symbol: {
        type: "simple-fill",
        color: [227, 139, 0, 0.4], // Orange, opacity 40%
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      },
      attributes: {
        ObjectID: 1,
      },
    },
    {
      geometry: {
        type: "polygon",
        rings: textToRings(daytimeHalfmVm),
      },

      symbol: {
        type: "simple-fill",
        color: [127, 0, 255, 0.3], //Purple, opacity 30%
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      },
      attributes: {
        ObjectID: 2,
      },
    },
  ];

  const renderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "ObjectID",
    legendOptions: {
      title: "Coverage Type",
    },
    uniqueValueInfos: [
      {
        objectIdField: 1,
        symbol: localFillSymbol,
        label: "Local Coverage", // used in the legend to describe features with this symbol
      },
      {
        objectIdField: 2,
        symbol: distantFillSymbol,
        label: "Distant Coverage", // used in the legend to describe features with this symbol
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
    title: "Veritas Catholic Media Broadcast Coverage Map",
  });

  const map = new Map({
    basemap: "streets-vector", // Basemap layer service
    layers: [coverageLayer],
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  const view = new MapView({
    map: map,
    center: [-73.434564, 41.115097], // transmitter location
    zoom: 9, // Zoom level
    container: "viewDiv", // Div element
  });

  graphicsLayer.add(features[0]);
  graphicsLayer.add(features[1]);

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
});
