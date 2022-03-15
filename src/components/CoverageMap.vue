<template>
<div id="coverageMapWrapper"></div>
</template>

<script>
import Graphic from "@arcgis/core/Graphic";
import {daytime2mVm} from "@/data/daytime2mVm";
import {daytimeHalfmVm} from "@/data/daytimeHalfmVm";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import {future} from "@/data/future";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";
import LayerList from "@arcgis/core/widgets/LayerList";

export default {
    name: "CoverageMap",
    methods: {
        initMap() {
            const localFillSymbol = {
                type: "simple-fill",
                color: [82, 117, 114, 0.5], // #527572
                outline: {
                    color: [255, 255, 255],
                    width: 1,
                },
            };

            const distantFillSymbol = {
                type: "simple-fill",
                color: [188, 209, 207, 0.3], // #bcd1cf
                outline: {
                    color: [255, 255, 255],
                    width: 1,
                },
            };

            const futureFillSymbol = {
                type: "simple-fill",
                color: [168, 158, 144, 0.3], // grey #A69E90
                outline: {
                    color: [255, 255, 255],
                    width: 1,
                },
            };

            const localRings = daytime2mVm;
            const currentFeatures = [
                {
                    geometry: {
                        type: "polygon",
                        rings: localRings,
                    },
                    attributes: {
                        ObjectID: 1,
                    },
                },
                {
                    geometry: {
                        type: "polygon",
                        rings: [daytimeHalfmVm, localRings],
                    },

                    attributes: {
                        ObjectID: 2,
                    },
                },
            ];

            const currentRenderer = {
                type: "unique-value", // autocasts as new UniqueValueRenderer()
                field: "ObjectID",
                legendOptions: {
                    title: " ",
                },
                uniqueValueInfos: [
                    {
                        value: 1,
                        symbol: localFillSymbol,
                        label: "Local", // used in the legend to describe features with this symbol
                    },
                    {
                        value: 2,
                        symbol: distantFillSymbol,
                        label: "Distant", // used in the legend to describe features with this symbol
                    },
                ],
            };

            // geometryType and spatialReference of the layer
            // will be inferred from the first feature in the array
            // if it has a geometry.
            const currentCoverageLayer = new FeatureLayer({
                source: currentFeatures, // autocast as a Collection of new Graphic()
                objectIdField: "ObjectID",
                title: "Coverage Map",
                renderer: currentRenderer,
                listMode: "hide",
            });
            const futureFeatures = [
                {
                    geometry: {
                        type: "polygon",
                        rings: future[0],
                    },
                },
                {
                    geometry: {
                        type: "polygon",
                        rings: future[1],
                    },
                },
                {
                    geometry: {
                        type: "polygon",
                        rings: future[2],
                    },
                },
                {
                    geometry: {
                        type: "polygon",
                        rings: future[3],
                    },
                },
                {
                    geometry: {
                        type: "polygon",
                        rings: future[4],
                    },
                },
                {
                    geometry: {
                        type: "polygon",
                        rings: future[5],
                    },
                },
            ];

            const futureRenderer = {
                type: "unique-value", // autocasts as new UniqueValueRenderer()
                field: "ObjectID",
                defaultSymbol: futureFillSymbol,
                defaultLabel: "Future",
                legendOptions: {
                    title: " ",
                },

                uniqueValueInfos: [],
            };

            // geometryType and spatialReference of the layer
            // will be inferred from the first feature in the array
            // if it has a geometry.
            const futureCoverageLayer = new FeatureLayer({
                source: futureFeatures, // autocast as a Collection of new Graphic()
                objectIdField: "ObjectID",
                renderer: futureRenderer,
                title: "Future Coverage",
                visible: false, // user must click eyeball icon to display
            });

            const map = new Map({
                basemap: "streets-vector", // Basemap layer service
                layers: [futureCoverageLayer, currentCoverageLayer],
            });

            const graphicsLayer = new GraphicsLayer({
                listMode: "hide",
            });

            map.add(graphicsLayer);

            const view = new MapView({
                map: map,
                center: [-73.434564, 41.115097], // transmitter location
                zoom: 8, // Zoom level
                container: "coverageMapWrapper", // Div element
            });

            const transmitterPoint = {
                type: "point",
                longitude: -73.434564, //transmitter location
                latitude: 41.115097,
            };

            const transmitterMarker = {
                type: "picture-marker",
                url: require("@/assets/veritas_logo_tower.png"),
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
                        layer: futureCoverageLayer,
                        title: " ",
                    },
                    {
                        layer: currentCoverageLayer,
                    },
                ],
            });

            // Add legend widget to the top-left corner of the view
            view.ui.add(legend, "top-left");

            const layerList = new LayerList({
                view: view,
            });

            // Add widget to the top right corner of the view
            view.ui.add(layerList, "top-left");
        }
    },
    mounted() {
        this.initMap()
    }
}
</script>

<style scoped>
@import "https://js.arcgis.com/4.22/@arcgis/core/assets/esri/themes/light/main.css";

    #coverageMapWrapper {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
    }
</style>