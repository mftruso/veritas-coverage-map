import {textToRings} from "./parse.js";


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
        color: [227, 139, 79, 0.8],  // Orange, opacity 80%
        outline: {
            color: [255, 255, 255],
            width: 1
        }
    };

    const distantFillSymbol = {
        type: "simple-fill",
        color: [127, 0, 255, 0.8],  // Purple, opacity 80%
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


    const daytime2mVm = `<!-- 360 degrees azimuth --> -73.432260,41.214200,0
    <!-- 359 degrees azimuth --> -73.434560,41.214220,0
    <!-- 358 degrees azimuth --> -73.436860,41.214200,0
    <!-- 357 degrees azimuth --> -73.439160,41.214160,0
    <!-- 356 degrees azimuth --> -73.441460,41.214080,0
    <!-- 355 degrees azimuth --> -73.443760,41.213970,0
    <!-- 354 degrees azimuth --> -73.446050,41.213840,0
    <!-- 353 degrees azimuth --> -73.448340,41.213670,0
    <!-- 352 degrees azimuth --> -73.450620,41.213480,0
    <!-- 351 degrees azimuth --> -73.452900,41.213250,0
    <!-- 350 degrees azimuth --> -73.455180,41.212990,0
    <!-- 349 degrees azimuth --> -73.457440,41.212710,0
    <!-- 348 degrees azimuth --> -73.459700,41.212390,0
    <!-- 347 degrees azimuth --> -73.461960,41.212050,0
    <!-- 346 degrees azimuth --> -73.464200,41.211670,0
    <!-- 345 degrees azimuth --> -73.466440,41.211270,0
    <!-- 344 degrees azimuth --> -73.468660,41.210830,0
    <!-- 343 degrees azimuth --> -73.470880,41.210370,0
    <!-- 342 degrees azimuth --> -73.473090,41.209880,0
    <!-- 341 degrees azimuth --> -73.475280,41.209360,0
    <!-- 340 degrees azimuth --> -73.477460,41.208810,0
    <!-- 339 degrees azimuth --> -73.479630,41.208230,0
    <!-- 338 degrees azimuth --> -73.481780,41.207620,0
    <!-- 337 degrees azimuth --> -73.483920,41.206990,0
    <!-- 336 degrees azimuth --> -73.486040,41.206320,0
    <!-- 335 degrees azimuth --> -73.488150,41.205630,0
    <!-- 334 degrees azimuth --> -73.490240,41.204920,0
    <!-- 333 degrees azimuth --> -73.492320,41.204170,0
    <!-- 332 degrees azimuth --> -73.494370,41.203400,0
    <!-- 331 degrees azimuth --> -73.496410,41.202600,0
    <!-- 330 degrees azimuth --> -73.498430,41.201770,0
    <!-- 329 degrees azimuth --> -73.500430,41.200920,0
    <!-- 328 degrees azimuth --> -73.502410,41.200040,0
    <!-- 327 degrees azimuth --> -73.504370,41.199130,0
    <!-- 326 degrees azimuth --> -73.506310,41.198200,0
    <!-- 325 degrees azimuth --> -73.508230,41.197250,0
    <!-- 324 degrees azimuth --> -73.510120,41.196270,0
    <!-- 323 degrees azimuth --> -73.511990,41.195260,0
    <!-- 322 degrees azimuth --> -73.513840,41.194230,0
    <!-- 321 degrees azimuth --> -73.515660,41.193180,0
    <!-- 320 degrees azimuth --> -73.517460,41.192100,0
    <!-- 319 degrees azimuth --> -73.519230,41.191000,0
    <!-- 318 degrees azimuth --> -73.520980,41.189870,0
    <!-- 317 degrees azimuth --> -73.522700,41.188720,0
    <!-- 316 degrees azimuth --> -73.524390,41.187550,0
    <!-- 315 degrees azimuth --> -73.526050,41.186360,0
    <!-- 314 degrees azimuth --> -73.527690,41.185150,0
    <!-- 313 degrees azimuth --> -73.529300,41.183910,0
    <!-- 312 degrees azimuth --> -73.530880,41.182660,0
    <!-- 311 degrees azimuth --> -73.532430,41.181380,0
    <!-- 310 degrees azimuth --> -73.533950,41.180080,0
    <!-- 309 degrees azimuth --> -73.535450,41.178770,0
    <!-- 308 degrees azimuth --> -73.536910,41.177430,0
    <!-- 307 degrees azimuth --> -73.538330,41.176070,0
    <!-- 306 degrees azimuth --> -73.539730,41.174700,0
    <!-- 305 degrees azimuth --> -73.541100,41.173310,0
    <!-- 304 degrees azimuth --> -73.542430,41.171900,0
    <!-- 303 degrees azimuth --> -73.543730,41.170470,0
    <!-- 302 degrees azimuth --> -73.544990,41.169030,0
    <!-- 301 degrees azimuth --> -73.546230,41.167570,0
    <!-- 300 degrees azimuth --> -73.547420,41.166090,0
    <!-- 299 degrees azimuth --> -73.548590,41.164600,0
    <!-- 298 degrees azimuth --> -73.549720,41.163090,0
    <!-- 297 degrees azimuth --> -73.550810,41.161570,0
    <!-- 296 degrees azimuth --> -73.551870,41.160040,0
    <!-- 295 degrees azimuth --> -73.552890,41.158490,0
    <!-- 294 degrees azimuth --> -73.553880,41.156920,0
    <!-- 293 degrees azimuth --> -73.554830,41.155350,0
    <!-- 292 degrees azimuth --> -73.555740,41.153760,0
    <!-- 291 degrees azimuth --> -73.556620,41.152160,0
    <!-- 290 degrees azimuth --> -73.557460,41.150550,0
    <!-- 289 degrees azimuth --> -73.558260,41.148930,0
    <!-- 288 degrees azimuth --> -73.559020,41.147300,0
    <!-- 287 degrees azimuth --> -73.559750,41.145660,0
    <!-- 286 degrees azimuth --> -73.560430,41.144010,0
    <!-- 285 degrees azimuth --> -73.561080,41.142350,0
    <!-- 284 degrees azimuth --> -73.561690,41.140680,0
    <!-- 283 degrees azimuth --> -73.562270,41.139010,0
    <!-- 282 degrees azimuth --> -73.562800,41.137320,0
    <!-- 281 degrees azimuth --> -73.563290,41.135630,0
    <!-- 280 degrees azimuth --> -73.563750,41.133940,0
    <!-- 279 degrees azimuth --> -73.564160,41.132240,0
    <!-- 278 degrees azimuth --> -73.564540,41.130530,0
    <!-- 277 degrees azimuth --> -73.564870,41.128820,0
    <!-- 276 degrees azimuth --> -73.565170,41.127100,0
    <!-- 275 degrees azimuth --> -73.565430,41.125380,0
    <!-- 274 degrees azimuth --> -73.565640,41.123660,0
    <!-- 273 degrees azimuth --> -73.565820,41.121940,0
    <!-- 272 degrees azimuth --> -73.565960,41.120210,0
    <!-- 271 degrees azimuth --> -73.566050,41.118480,0
    <!-- 270 degrees azimuth --> -73.566110,41.116750,0
    <!-- 269 degrees azimuth --> -73.566130,41.115020,0
    <!-- 268 degrees azimuth --> -73.566100,41.113290,0
    <!-- 267 degrees azimuth --> -73.566040,41.111560,0
    <!-- 266 degrees azimuth --> -73.565940,41.109830,0
    <!-- 265 degrees azimuth --> -73.565790,41.108110,0
    <!-- 264 degrees azimuth --> -73.565610,41.106380,0
    <!-- 263 degrees azimuth --> -73.565390,41.104660,0
    <!-- 262 degrees azimuth --> -73.565120,41.102940,0
    <!-- 261 degrees azimuth --> -73.564820,41.101230,0
    <!-- 260 degrees azimuth --> -73.564480,41.099520,0
    <!-- 259 degrees azimuth --> -73.564090,41.097810,0
    <!-- 258 degrees azimuth --> -73.563670,41.096110,0
    <!-- 257 degrees azimuth --> -73.563210,41.094420,0
    <!-- 256 degrees azimuth --> -73.562710,41.092730,0
    <!-- 255 degrees azimuth --> -73.562170,41.091050,0
    <!-- 254 degrees azimuth --> -73.561590,41.089370,0
    <!-- 253 degrees azimuth --> -73.560980,41.087710,0
    <!-- 252 degrees azimuth --> -73.560320,41.086050,0
    <!-- 251 degrees azimuth --> -73.559630,41.084400,0
    <!-- 250 degrees azimuth --> -73.558900,41.082760,0
    <!-- 249 degrees azimuth --> -73.558130,41.081130,0
    <!-- 248 degrees azimuth --> -73.557320,41.079510,0
    <!-- 247 degrees azimuth --> -73.556480,41.077900,0
    <!-- 246 degrees azimuth --> -73.555600,41.076300,0
    <!-- 245 degrees azimuth --> -73.554680,41.074720,0
    <!-- 244 degrees azimuth --> -73.553720,41.073150,0
    <!-- 243 degrees azimuth --> -73.552730,41.071590,0
    <!-- 242 degrees azimuth --> -73.551710,41.070040,0
    <!-- 241 degrees azimuth --> -73.550650,41.068510,0
    <!-- 240 degrees azimuth --> -73.549550,41.066990,0
    <!-- 239 degrees azimuth --> -73.548420,41.065480,0
    <!-- 238 degrees azimuth --> -73.547250,41.063990,0
    <!-- 237 degrees azimuth --> -73.546050,41.062520,0
    <!-- 236 degrees azimuth --> -73.544810,41.061060,0
    <!-- 235 degrees azimuth --> -73.543540,41.059620,0
    <!-- 234 degrees azimuth --> -73.542240,41.058190,0
    <!-- 233 degrees azimuth --> -73.540910,41.056790,0
    <!-- 232 degrees azimuth --> -73.539540,41.055400,0
    <!-- 231 degrees azimuth --> -73.538140,41.054030,0
    <!-- 230 degrees azimuth --> -73.536710,41.052670,0
    <!-- 229 degrees azimuth --> -73.535250,41.051340,0
    <!-- 228 degrees azimuth --> -73.533760,41.050030,0
    <!-- 227 degrees azimuth --> -73.532240,41.048730,0
    <!-- 226 degrees azimuth --> -73.530680,41.047460,0
    <!-- 225 degrees azimuth --> -73.529100,41.046200,0
    <!-- 224 degrees azimuth --> -73.527490,41.044970,0
    <!-- 223 degrees azimuth --> -73.525860,41.043760,0
    <!-- 222 degrees azimuth --> -73.550340,41.021370,0
    <!-- 221 degrees azimuth --> -73.612220,40.965970,0
    <!-- 220 degrees azimuth --> -73.665460,40.914140,0
    <!-- 219 degrees azimuth --> -73.710930,40.865690,0
    <!-- 218 degrees azimuth --> -73.709450,40.858030,0
    <!-- 217 degrees azimuth --> -73.706390,40.851610,0
    <!-- 216 degrees azimuth --> -73.702900,40.845410,0
    <!-- 215 degrees azimuth --> -73.699060,40.839370,0
    <!-- 214 degrees azimuth --> -73.692380,40.836230,0
    <!-- 213 degrees azimuth --> -73.681540,40.837820,0
    <!-- 212 degrees azimuth --> -73.644910,40.869970,0
    <!-- 211 degrees azimuth --> -73.638020,40.868700,0
    <!-- 210 degrees azimuth --> -73.631140,40.867520,0
    <!-- 209 degrees azimuth --> -73.624390,40.866300,0
    <!-- 208 degrees azimuth --> -73.617640,40.865180,0
    <!-- 207 degrees azimuth --> -73.610890,40.864170,0
    <!-- 206 degrees azimuth --> -73.604210,40.863170,0
    <!-- 205 degrees azimuth --> -73.597590,40.862190,0
    <!-- 204 degrees azimuth --> -73.590980,40.861310,0
    <!-- 203 degrees azimuth --> -73.584420,40.860440,0
    <!-- 202 degrees azimuth --> -73.577870,40.859670,0
    <!-- 201 degrees azimuth --> -73.571420,40.858830,0
    <!-- 200 degrees azimuth --> -73.564930,40.858160,0
    <!-- 199 degrees azimuth --> -73.558490,40.857500,0
    <!-- 198 degrees azimuth --> -73.552110,40.856840,0
    <!-- 197 degrees azimuth --> -73.545730,40.856280,0
    <!-- 196 degrees azimuth --> -73.536550,40.862770,0
    <!-- 195 degrees azimuth --> -73.527350,40.870380,0
    <!-- 194 degrees azimuth --> -73.521870,40.868670,0
    <!-- 193 degrees azimuth --> -73.515740,40.868870,0
    <!-- 192 degrees azimuth --> -73.509670,40.869070,0
    <!-- 191 degrees azimuth --> -73.503660,40.869260,0
    <!-- 190 degrees azimuth --> -73.497700,40.869450,0
    <!-- 189 degrees azimuth --> -73.491800,40.869630,0
    <!-- 188 degrees azimuth --> -73.486090,40.869100,0
    <!-- 187 degrees azimuth --> -73.480480,40.868010,0
    <!-- 186 degrees azimuth --> -73.474860,40.866910,0
    <!-- 185 degrees azimuth --> -73.469190,40.865970,0
    <!-- 184 degrees azimuth --> -73.463510,40.864920,0
    <!-- 183 degrees azimuth --> -73.457790,40.863950,0
    <!-- 182 degrees azimuth --> -73.452030,40.863060,0
    <!-- 181 degrees azimuth --> -73.446240,40.862150,0
    <!-- 180 degrees azimuth --> -73.440420,40.861220,0
    <!-- 179 degrees azimuth --> -73.434560,40.860370,0
    <!-- 178 degrees azimuth --> -73.428670,40.859510,0
    <!-- 177 degrees azimuth --> -73.422730,40.858730,0
    <!-- 176 degrees azimuth --> -73.416740,40.857850,0
    <!-- 175 degrees azimuth --> -73.410640,40.856330,0
    <!-- 174 degrees azimuth --> -73.406470,40.872270,0
    <!-- 173 degrees azimuth --> -73.401710,40.878760,0
    <!-- 172 degrees azimuth --> -73.396150,40.878520,0
    <!-- 171 degrees azimuth --> -73.390580,40.878430,0
    <!-- 170 degrees azimuth --> -73.384950,40.878250,0
    <!-- 169 degrees azimuth --> -73.379310,40.878140,0
    <!-- 168 degrees azimuth --> -73.373620,40.878020,0
    <!-- 167 degrees azimuth --> -73.367910,40.877980,0
    <!-- 166 degrees azimuth --> -73.362150,40.877920,0
    <!-- 165 degrees azimuth --> -73.356340,40.877860,0
    <!-- 164 degrees azimuth --> -73.350510,40.877890,0
    <!-- 163 degrees azimuth --> -73.344620,40.877900,0
    <!-- 162 degrees azimuth --> -73.338680,40.877920,0
    <!-- 161 degrees azimuth --> -73.332670,40.877930,0
    <!-- 160 degrees azimuth --> -73.326630,40.878030,0
    <!-- 159 degrees azimuth --> -73.320480,40.878050,0
    <!-- 158 degrees azimuth --> -73.314300,40.878150,0
    <!-- 157 degrees azimuth --> -73.308010,40.878190,0
    <!-- 156 degrees azimuth --> -73.301680,40.878310,0
    <!-- 155 degrees azimuth --> -73.295260,40.878450,0
    <!-- 154 degrees azimuth --> -73.288720,40.878520,0
    <!-- 153 degrees azimuth --> -73.282080,40.878620,0
    <!-- 152 degrees azimuth --> -73.275350,40.878730,0
    <!-- 151 degrees azimuth --> -73.268080,40.878240,0
    <!-- 150 degrees azimuth --> -73.259540,40.876210,0
    <!-- 149 degrees azimuth --> -73.248950,40.871840,0
    <!-- 148 degrees azimuth --> -73.237680,40.867140,0
    <!-- 147 degrees azimuth --> -73.225640,40.862050,0
    <!-- 146 degrees azimuth --> -73.212730,40.856520,0
    <!-- 145 degrees azimuth --> -73.201960,40.854030,0
    <!-- 144 degrees azimuth --> -73.195290,40.856390,0
    <!-- 143 degrees azimuth --> -73.188580,40.858770,0
    <!-- 142 degrees azimuth --> -73.181840,40.861180,0
    <!-- 141 degrees azimuth --> -73.175070,40.863620,0
    <!-- 140 degrees azimuth --> -73.168330,40.866160,0
    <!-- 139 degrees azimuth --> -73.161470,40.868660,0
    <!-- 138 degrees azimuth --> -73.154570,40.871200,0
    <!-- 137 degrees azimuth --> -73.147710,40.873840,0
    <!-- 136 degrees azimuth --> -73.140720,40.876460,0
    <!-- 135 degrees azimuth --> -73.133690,40.879130,0
    <!-- 134 degrees azimuth --> -73.126600,40.881850,0
    <!-- 133 degrees azimuth --> -73.119460,40.884610,0
    <!-- 132 degrees azimuth --> -73.112180,40.887380,0
    <!-- 131 degrees azimuth --> -73.105730,40.890800,0
    <!-- 130 degrees azimuth --> -73.104710,40.897890,0
    <!-- 129 degrees azimuth --> -73.103820,40.904870,0
    <!-- 128 degrees azimuth --> -73.102880,40.911640,0
    <!-- 127 degrees azimuth --> -73.102050,40.918310,0
    <!-- 126 degrees azimuth --> -73.101150,40.924780,0
    <!-- 125 degrees azimuth --> -73.100350,40.931160,0
    <!-- 124 degrees azimuth --> -73.099540,40.937400,0
    <!-- 123 degrees azimuth --> -73.098820,40.943550,0
    <!-- 122 degrees azimuth --> -73.086030,40.943610,0
    <!-- 121 degrees azimuth --> -73.072440,40.943610,0
    <!-- 120 degrees azimuth --> -73.057930,40.943540,0
    <!-- 119 degrees azimuth --> -73.042290,40.943360,0
    <!-- 118 degrees azimuth --> -73.025590,40.943130,0
    <!-- 117 degrees azimuth --> -73.007500,40.942780,0
    <!-- 116 degrees azimuth --> -72.987900,40.942320,0
    <!-- 115 degrees azimuth --> -72.966670,40.941770,0
    <!-- 114 degrees azimuth --> -72.943330,40.941020,0
    <!-- 113 degrees azimuth --> -72.923200,40.941990,0
    <!-- 112 degrees azimuth --> -72.904050,40.943780,0
    <!-- 111 degrees azimuth --> -72.883510,40.945620,0
    <!-- 110 degrees azimuth --> -72.861570,40.947550,0
    <!-- 109 degrees azimuth --> -72.837890,40.949530,0
    <!-- 108 degrees azimuth --> -72.812320,40.951600,0
    <!-- 107 degrees azimuth --> -72.784530,40.953760,0
    <!-- 106 degrees azimuth --> -72.754160,40.955990,0
    <!-- 105 degrees azimuth --> -72.720950,40.958360,0
    <!-- 104 degrees azimuth --> -72.684440,40.960880,0
    <!-- 103 degrees azimuth --> -72.643920,40.963530,0
    <!-- 102 degrees azimuth --> -72.602720,40.967090,0
    <!-- 101 degrees azimuth --> -72.588890,40.976290,0
    <!-- 100 degrees azimuth --> -72.574640,40.985720,0
    <!-- 99 degrees azimuth --> -72.560110,40.995410,0
    <!-- 98 degrees azimuth --> -72.545180,41.005370,0
    <!-- 97 degrees azimuth --> -72.529730,41.015610,0
    <!-- 96 degrees azimuth --> -72.513780,41.026140,0
    <!-- 95 degrees azimuth --> -72.498150,41.037070,0
    <!-- 94 degrees azimuth --> -72.482390,41.048350,0
    <!-- 93 degrees azimuth --> -72.466400,41.060000,0
    <!-- 92 degrees azimuth --> -72.471720,41.073050,0
    <!-- 91 degrees azimuth --> -72.538040,41.088030,0
    <!-- 90 degrees azimuth --> -72.617410,41.101460,0
    <!-- 89 degrees azimuth --> -72.712890,41.112850,0
    <!-- 88 degrees azimuth --> -72.827750,41.121480,0
    <!-- 87 degrees azimuth --> -72.967370,41.126440,0
    <!-- 86 degrees azimuth --> -73.137530,41.126440,0
    <!-- 85 degrees azimuth --> -73.303310,41.121940,0
    <!-- 84 degrees azimuth --> -73.303480,41.123660,0
    <!-- 83 degrees azimuth --> -73.303700,41.125380,0
    <!-- 82 degrees azimuth --> -73.303960,41.127100,0
    <!-- 81 degrees azimuth --> -73.304250,41.128820,0
    <!-- 80 degrees azimuth --> -73.304590,41.130530,0
    <!-- 79 degrees azimuth --> -73.304970,41.132240,0
    <!-- 78 degrees azimuth --> -73.305380,41.133940,0
    <!-- 77 degrees azimuth --> -73.305840,41.135630,0
    <!-- 76 degrees azimuth --> -73.306330,41.137320,0
    <!-- 75 degrees azimuth --> -73.306860,41.139010,0
    <!-- 74 degrees azimuth --> -73.307430,41.140680,0
    <!-- 73 degrees azimuth --> -73.308040,41.142350,0
    <!-- 72 degrees azimuth --> -73.308690,41.144010,0
    <!-- 71 degrees azimuth --> -73.309380,41.145660,0
    <!-- 70 degrees azimuth --> -73.310110,41.147300,0
    <!-- 69 degrees azimuth --> -73.310870,41.148930,0
    <!-- 68 degrees azimuth --> -73.311670,41.150550,0
    <!-- 67 degrees azimuth --> -73.312510,41.152160,0
    <!-- 66 degrees azimuth --> -73.313390,41.153760,0
    <!-- 65 degrees azimuth --> -73.314300,41.155350,0
    <!-- 64 degrees azimuth --> -73.315250,41.156920,0
    <!-- 63 degrees azimuth --> -73.316240,41.158490,0
    <!-- 62 degrees azimuth --> -73.317260,41.160040,0
    <!-- 61 degrees azimuth --> -73.318320,41.161570,0
    <!-- 60 degrees azimuth --> -73.319410,41.163090,0
    <!-- 59 degrees azimuth --> -73.320540,41.164600,0
    <!-- 58 degrees azimuth --> -73.321700,41.166090,0
    <!-- 57 degrees azimuth --> -73.322900,41.167570,0
    <!-- 56 degrees azimuth --> -73.324130,41.169030,0
    <!-- 55 degrees azimuth --> -73.325400,41.170470,0
    <!-- 54 degrees azimuth --> -73.326700,41.171900,0
    <!-- 53 degrees azimuth --> -73.328030,41.173310,0
    <!-- 52 degrees azimuth --> -73.329400,41.174700,0
    <!-- 51 degrees azimuth --> -73.330790,41.176070,0
    <!-- 50 degrees azimuth --> -73.332220,41.177430,0
    <!-- 49 degrees azimuth --> -73.333680,41.178770,0
    <!-- 48 degrees azimuth --> -73.335170,41.180080,0
    <!-- 47 degrees azimuth --> -73.336690,41.181380,0
    <!-- 46 degrees azimuth --> -73.338250,41.182660,0
    <!-- 45 degrees azimuth --> -73.339830,41.183910,0
    <!-- 44 degrees azimuth --> -73.341440,41.185150,0
    <!-- 43 degrees azimuth --> -73.343070,41.186360,0
    <!-- 42 degrees azimuth --> -73.344740,41.187550,0
    <!-- 41 degrees azimuth --> -73.346430,41.188720,0
    <!-- 40 degrees azimuth --> -73.348150,41.189870,0
    <!-- 39 degrees azimuth --> -73.349900,41.191000,0
    <!-- 38 degrees azimuth --> -73.351670,41.192100,0
    <!-- 37 degrees azimuth --> -73.353470,41.193180,0
    <!-- 36 degrees azimuth --> -73.355290,41.194230,0
    <!-- 35 degrees azimuth --> -73.357140,41.195260,0
    <!-- 34 degrees azimuth --> -73.359010,41.196270,0
    <!-- 33 degrees azimuth --> -73.360900,41.197250,0
    <!-- 32 degrees azimuth --> -73.362820,41.198200,0
    <!-- 31 degrees azimuth --> -73.364760,41.199130,0
    <!-- 30 degrees azimuth --> -73.366720,41.200040,0
    <!-- 29 degrees azimuth --> -73.368700,41.200920,0
    <!-- 28 degrees azimuth --> -73.370700,41.201770,0
    <!-- 27 degrees azimuth --> -73.372720,41.202600,0
    <!-- 26 degrees azimuth --> -73.374750,41.203400,0
    <!-- 25 degrees azimuth --> -73.376810,41.204170,0
    <!-- 24 degrees azimuth --> -73.378890,41.204920,0
    <!-- 23 degrees azimuth --> -73.380980,41.205630,0
    <!-- 22 degrees azimuth --> -73.383090,41.206320,0
    <!-- 21 degrees azimuth --> -73.385210,41.206990,0
    <!-- 20 degrees azimuth --> -73.387350,41.207620,0
    <!-- 19 degrees azimuth --> -73.389500,41.208230,0
    <!-- 18 degrees azimuth --> -73.391670,41.208810,0
    <!-- 17 degrees azimuth --> -73.393850,41.209360,0
    <!-- 16 degrees azimuth --> -73.396040,41.209880,0
    <!-- 15 degrees azimuth --> -73.398250,41.210370,0
    <!-- 14 degrees azimuth --> -73.400460,41.210830,0
    <!-- 13 degrees azimuth --> -73.402690,41.211270,0
    <!-- 12 degrees azimuth --> -73.404930,41.211670,0
    <!-- 11 degrees azimuth --> -73.407170,41.212050,0
    <!-- 10 degrees azimuth --> -73.409420,41.212390,0
    <!-- 9 degrees azimuth --> -73.411680,41.212710,0
    <!-- 8 degrees azimuth --> -73.413950,41.212990,0
    <!-- 7 degrees azimuth --> -73.416230,41.213250,0
    <!-- 6 degrees azimuth --> -73.418510,41.213480,0
    <!-- 5 degrees azimuth --> -73.420790,41.213670,0
    <!-- 4 degrees azimuth --> -73.423080,41.213840,0
    <!-- 3 degrees azimuth --> -73.425370,41.213970,0
    <!-- 2 degrees azimuth --> -73.427670,41.214080,0
    <!-- 1 degrees azimuth --> -73.429970,41.214160,0
    <!-- 0 degrees azimuth --> -73.432260,41.214200,0`;

    const daytimeHalfmVm = `<!-- 360 degrees azimuth --> -73.430070,41.308630,0
    <!-- 359 degrees azimuth --> -73.434560,41.308660,0
    <!-- 358 degrees azimuth --> -73.439060,41.308630,0
    <!-- 357 degrees azimuth --> -73.443560,41.308540,0
    <!-- 356 degrees azimuth --> -73.448050,41.308390,0
    <!-- 355 degrees azimuth --> -73.452540,41.308180,0
    <!-- 354 degrees azimuth --> -73.457020,41.307920,0
    <!-- 353 degrees azimuth --> -73.461500,41.307590,0
    <!-- 352 degrees azimuth --> -73.465970,41.307210,0
    <!-- 351 degrees azimuth --> -73.470430,41.306770,0
    <!-- 350 degrees azimuth --> -73.474870,41.306270,0
    <!-- 349 degrees azimuth --> -73.479310,41.305710,0
    <!-- 348 degrees azimuth --> -73.483730,41.305090,0
    <!-- 347 degrees azimuth --> -73.488140,41.304410,0
    <!-- 346 degrees azimuth --> -73.492520,41.303680,0
    <!-- 345 degrees azimuth --> -73.496900,41.302890,0
    <!-- 344 degrees azimuth --> -73.501250,41.302040,0
    <!-- 343 degrees azimuth --> -73.505580,41.301140,0
    <!-- 342 degrees azimuth --> -73.509890,41.300170,0
    <!-- 341 degrees azimuth --> -73.514180,41.299160,0
    <!-- 340 degrees azimuth --> -73.518440,41.298080,0
    <!-- 339 degrees azimuth --> -73.522680,41.296950,0
    <!-- 338 degrees azimuth --> -73.526890,41.295760,0
    <!-- 337 degrees azimuth --> -73.531070,41.294520,0
    <!-- 336 degrees azimuth --> -73.535220,41.293230,0
    <!-- 335 degrees azimuth --> -73.539340,41.291880,0
    <!-- 334 degrees azimuth --> -73.543430,41.290470,0
    <!-- 333 degrees azimuth --> -73.547490,41.289010,0
    <!-- 332 degrees azimuth --> -73.551510,41.287500,0
    <!-- 331 degrees azimuth --> -73.555500,41.285940,0
    <!-- 330 degrees azimuth --> -73.559440,41.284320,0
    <!-- 329 degrees azimuth --> -73.563350,41.282650,0
    <!-- 328 degrees azimuth --> -73.567220,41.280930,0
    <!-- 327 degrees azimuth --> -73.571050,41.279160,0
    <!-- 326 degrees azimuth --> -73.574840,41.277350,0
    <!-- 325 degrees azimuth --> -73.578580,41.275480,0
    <!-- 324 degrees azimuth --> -73.582280,41.273560,0
    <!-- 323 degrees azimuth --> -73.585940,41.271590,0
    <!-- 322 degrees azimuth --> -73.589550,41.269580,0
    <!-- 321 degrees azimuth --> -73.593110,41.267520,0
    <!-- 320 degrees azimuth --> -73.596620,41.265410,0
    <!-- 319 degrees azimuth --> -73.600080,41.263250,0
    <!-- 318 degrees azimuth --> -73.603490,41.261060,0
    <!-- 317 degrees azimuth --> -73.606850,41.258810,0
    <!-- 316 degrees azimuth --> -73.610160,41.256520,0
    <!-- 315 degrees azimuth --> -73.613410,41.254190,0
    <!-- 314 degrees azimuth --> -73.616610,41.251820,0
    <!-- 313 degrees azimuth --> -73.619760,41.249410,0
    <!-- 312 degrees azimuth --> -73.622840,41.246950,0
    <!-- 311 degrees azimuth --> -73.625870,41.244460,0
    <!-- 310 degrees azimuth --> -73.628840,41.241920,0
    <!-- 309 degrees azimuth --> -73.631750,41.239350,0
    <!-- 308 degrees azimuth --> -73.634600,41.236740,0
    <!-- 307 degrees azimuth --> -73.637390,41.234090,0
    <!-- 306 degrees azimuth --> -73.640110,41.231400,0
    <!-- 305 degrees azimuth --> -73.642780,41.228680,0
    <!-- 304 degrees azimuth --> -73.645380,41.225930,0
    <!-- 303 degrees azimuth --> -73.647910,41.223140,0
    <!-- 302 degrees azimuth --> -73.650380,41.220320,0
    <!-- 301 degrees azimuth --> -73.652780,41.217460,0
    <!-- 300 degrees azimuth --> -73.655120,41.214580,0
    <!-- 299 degrees azimuth --> -73.657390,41.211660,0
    <!-- 298 degrees azimuth --> -73.659590,41.208720,0
    <!-- 297 degrees azimuth --> -73.661720,41.205740,0
    <!-- 296 degrees azimuth --> -73.663790,41.202740,0
    <!-- 295 degrees azimuth --> -73.665780,41.199720,0
    <!-- 294 degrees azimuth --> -73.667700,41.196660,0
    <!-- 293 degrees azimuth --> -73.669550,41.193590,0
    <!-- 292 degrees azimuth --> -73.671330,41.190480,0
    <!-- 291 degrees azimuth --> -73.673040,41.187360,0
    <!-- 290 degrees azimuth --> -73.674670,41.184210,0
    <!-- 289 degrees azimuth --> -73.676230,41.181050,0
    <!-- 288 degrees azimuth --> -73.677720,41.177860,0
    <!-- 287 degrees azimuth --> -73.679130,41.174650,0
    <!-- 286 degrees azimuth --> -73.680470,41.171430,0
    <!-- 285 degrees azimuth --> -73.681730,41.168190,0
    <!-- 284 degrees azimuth --> -73.682920,41.164930,0
    <!-- 283 degrees azimuth --> -73.684030,41.161650,0
    <!-- 282 degrees azimuth --> -73.685060,41.158370,0
    <!-- 281 degrees azimuth --> -73.686020,41.155070,0
    <!-- 280 degrees azimuth --> -73.686900,41.151750,0
    <!-- 279 degrees azimuth --> -73.687710,41.148430,0
    <!-- 278 degrees azimuth --> -73.688440,41.145100,0
    <!-- 277 degrees azimuth --> -73.689090,41.141760,0
    <!-- 276 degrees azimuth --> -73.689660,41.138400,0
    <!-- 275 degrees azimuth --> -73.690150,41.135050,0
    <!-- 274 degrees azimuth --> -73.690570,41.131680,0
    <!-- 273 degrees azimuth --> -73.690910,41.128320,0
    <!-- 272 degrees azimuth --> -73.691170,41.124940,0
    <!-- 271 degrees azimuth --> -73.691350,41.121570,0
    <!-- 270 degrees azimuth --> -73.691460,41.118190,0
    <!-- 269 degrees azimuth --> -73.691480,41.114810,0
    <!-- 268 degrees azimuth --> -73.691430,41.111430,0
    <!-- 267 degrees azimuth --> -73.691300,41.108060,0
    <!-- 266 degrees azimuth --> -73.691090,41.104680,0
    <!-- 265 degrees azimuth --> -73.690800,41.101310,0
    <!-- 264 degrees azimuth --> -73.690440,41.097940,0
    <!-- 263 degrees azimuth --> -73.690000,41.094580,0
    <!-- 262 degrees azimuth --> -73.689480,41.091230,0
    <!-- 261 degrees azimuth --> -73.688880,41.087880,0
    <!-- 260 degrees azimuth --> -73.688200,41.084540,0
    <!-- 259 degrees azimuth --> -73.687450,41.081210,0
    <!-- 258 degrees azimuth --> -73.686620,41.077890,0
    <!-- 257 degrees azimuth --> -73.685710,41.074580,0
    <!-- 256 degrees azimuth --> -73.684730,41.071280,0
    <!-- 255 degrees azimuth --> -73.683670,41.068000,0
    <!-- 254 degrees azimuth --> -73.682540,41.064730,0
    <!-- 253 degrees azimuth --> -73.681330,41.061480,0
    <!-- 252 degrees azimuth --> -73.680040,41.058240,0
    <!-- 251 degrees azimuth --> -73.678690,41.055030,0
    <!-- 250 degrees azimuth --> -73.677250,41.051830,0
    <!-- 249 degrees azimuth --> -73.675740,41.048640,0
    <!-- 248 degrees azimuth --> -73.674160,41.045480,0
    <!-- 247 degrees azimuth --> -73.672510,41.042340,0
    <!-- 246 degrees azimuth --> -73.670790,41.039230,0
    <!-- 245 degrees azimuth --> -73.668990,41.036130,0
    <!-- 244 degrees azimuth --> -73.667120,41.033060,0
    <!-- 243 degrees azimuth --> -73.665180,41.030020,0
    <!-- 242 degrees azimuth --> -73.663170,41.027000,0
    <!-- 241 degrees azimuth --> -73.661100,41.024000,0
    <!-- 240 degrees azimuth --> -73.658950,41.021040,0
    <!-- 239 degrees azimuth --> -73.656730,41.018100,0
    <!-- 238 degrees azimuth --> -73.654450,41.015200,0
    <!-- 237 degrees azimuth --> -73.652100,41.012320,0
    <!-- 236 degrees azimuth --> -73.649690,41.009480,0
    <!-- 235 degrees azimuth --> -73.647210,41.006660,0
    <!-- 234 degrees azimuth --> -73.644660,41.003880,0
    <!-- 233 degrees azimuth --> -73.642060,41.001140,0
    <!-- 232 degrees azimuth --> -73.639380,40.998430,0
    <!-- 231 degrees azimuth --> -73.636650,40.995750,0
    <!-- 230 degrees azimuth --> -73.633860,40.993110,0
    <!-- 229 degrees azimuth --> -73.655780,40.974740,0
    <!-- 228 degrees azimuth --> -73.988410,40.749030,0
    <!-- 227 degrees azimuth --> -73.945630,40.765440,0
    <!-- 226 degrees azimuth --> -73.951810,40.748520,0
    <!-- 225 degrees azimuth --> -73.962360,40.727630,0
    <!-- 224 degrees azimuth --> -73.959840,40.715760,0
    <!-- 223 degrees azimuth --> -73.947100,40.711650,0
    <!-- 222 degrees azimuth --> -73.928380,40.712640,0
    <!-- 221 degrees azimuth --> -73.906860,40.716560,0
    <!-- 220 degrees azimuth --> -73.885060,40.721450,0
    <!-- 219 degrees azimuth --> -73.866500,40.724170,0
    <!-- 218 degrees azimuth --> -73.848360,40.727110,0
    <!-- 217 degrees azimuth --> -73.830340,40.730550,0
    <!-- 216 degrees azimuth --> -73.814660,40.732250,0
    <!-- 215 degrees azimuth --> -73.803690,40.729500,0
    <!-- 214 degrees azimuth --> -73.791360,40.728400,0
    <!-- 213 degrees azimuth --> -73.776580,40.730350,0
    <!-- 212 degrees azimuth --> -73.761100,40.733620,0
    <!-- 211 degrees azimuth --> -73.745940,40.737110,0
    <!-- 210 degrees azimuth --> -73.731100,40.740790,0
    <!-- 209 degrees azimuth --> -73.716400,40.744910,0
    <!-- 208 degrees azimuth --> -73.701990,40.749300,0
    <!-- 207 degrees azimuth --> -73.687750,40.754110,0
    <!-- 206 degrees azimuth --> -73.674880,40.757580,0
    <!-- 205 degrees azimuth --> -73.663140,40.759900,0
    <!-- 204 degrees azimuth --> -73.651820,40.762000,0
    <!-- 203 degrees azimuth --> -73.640860,40.763970,0
    <!-- 202 degrees azimuth --> -73.630240,40.765790,0
    <!-- 201 degrees azimuth --> -73.619860,40.767610,0
    <!-- 200 degrees azimuth --> -73.609790,40.769260,0
    <!-- 199 degrees azimuth --> -73.599970,40.770810,0
    <!-- 198 degrees azimuth --> -73.590350,40.772350,0
    <!-- 197 degrees azimuth --> -73.580930,40.773860,0
    <!-- 196 degrees azimuth --> -73.570180,40.779130,0
    <!-- 195 degrees azimuth --> -73.559540,40.785010,0
    <!-- 194 degrees azimuth --> -73.551360,40.784980,0
    <!-- 193 degrees azimuth --> -73.543310,40.784810,0
    <!-- 192 degrees azimuth --> -73.535310,40.784650,0
    <!-- 191 degrees azimuth --> -73.527350,40.784520,0
    <!-- 190 degrees azimuth --> -73.519450,40.784410,0
    <!-- 189 degrees azimuth --> -73.511590,40.784320,0
    <!-- 188 degrees azimuth --> -73.503910,40.783540,0
    <!-- 187 degrees azimuth --> -73.496340,40.782230,0
    <!-- 186 degrees azimuth --> -73.488750,40.780930,0
    <!-- 185 degrees azimuth --> -73.481110,40.779730,0
    <!-- 184 degrees azimuth --> -73.473440,40.778640,0
    <!-- 183 degrees azimuth --> -73.465730,40.777550,0
    <!-- 182 degrees azimuth --> -73.457990,40.776560,0
    <!-- 181 degrees azimuth --> -73.450220,40.775580,0
    <!-- 180 degrees azimuth --> -73.442410,40.774620,0
    <!-- 179 degrees azimuth --> -73.434560,40.773760,0
    <!-- 178 degrees azimuth --> -73.426680,40.772910,0
    <!-- 177 degrees azimuth --> -73.418750,40.772080,0
    <!-- 176 degrees azimuth --> -73.410780,40.771350,0
    <!-- 175 degrees azimuth --> -73.402690,40.769920,0
    <!-- 174 degrees azimuth --> -73.396540,40.785980,0
    <!-- 173 degrees azimuth --> -73.389800,40.792620,0
    <!-- 172 degrees azimuth --> -73.382250,40.792540,0
    <!-- 171 degrees azimuth --> -73.374690,40.792560,0
    <!-- 170 degrees azimuth --> -73.367120,40.792690,0
    <!-- 169 degrees azimuth --> -73.359510,40.792830,0
    <!-- 168 degrees azimuth --> -73.351870,40.792980,0
    <!-- 167 degrees azimuth --> -73.344210,40.793240,0
    <!-- 166 degrees azimuth --> -73.336510,40.793510,0
    <!-- 165 degrees azimuth --> -73.328770,40.793800,0
    <!-- 164 degrees azimuth --> -73.321010,40.794200,0
    <!-- 163 degrees azimuth --> -73.313200,40.794610,0
    <!-- 162 degrees azimuth --> -73.305350,40.795050,0
    <!-- 161 degrees azimuth --> -73.297440,40.795520,0
    <!-- 160 degrees azimuth --> -73.289470,40.796010,0
    <!-- 159 degrees azimuth --> -73.281490,40.796610,0
    <!-- 158 degrees azimuth --> -73.273450,40.797240,0
    <!-- 157 degrees azimuth --> -73.265300,40.797820,0
    <!-- 156 degrees azimuth --> -73.257130,40.798520,0
    <!-- 155 degrees azimuth --> -73.248890,40.799260,0
    <!-- 154 degrees azimuth --> -73.240540,40.799950,0
    <!-- 153 degrees azimuth --> -73.232100,40.800690,0
    <!-- 152 degrees azimuth --> -73.223590,40.801470,0
    <!-- 151 degrees azimuth --> -73.214500,40.801590,0
    <!-- 150 degrees azimuth --> -73.204260,40.800360,0
    <!-- 149 degrees azimuth --> -73.191950,40.796720,0
    <!-- 148 degrees azimuth --> -73.178980,40.792780,0
    <!-- 147 degrees azimuth --> -73.165250,40.788470,0
    <!-- 146 degrees azimuth --> -73.150610,40.783670,0
    <!-- 145 degrees azimuth --> -73.138250,40.782070,0
    <!-- 144 degrees azimuth --> -73.129930,40.785280,0
    <!-- 143 degrees azimuth --> -73.121600,40.788530,0
    <!-- 142 degrees azimuth --> -73.113260,40.791830,0
    <!-- 141 degrees azimuth --> -73.104900,40.795180,0
    <!-- 140 degrees azimuth --> -73.096590,40.798650,0
    <!-- 139 degrees azimuth --> -73.088200,40.802110,0
    <!-- 138 degrees azimuth --> -73.079780,40.805620,0
    <!-- 137 degrees azimuth --> -73.071340,40.809190,0
    <!-- 136 degrees azimuth --> -73.062950,40.812890,0
    <!-- 135 degrees azimuth --> -73.054470,40.816590,0
    <!-- 134 degrees azimuth --> -73.045950,40.820360,0
    <!-- 133 degrees azimuth --> -73.037410,40.824190,0
    <!-- 132 degrees azimuth --> -73.028750,40.828040,0
    <!-- 131 degrees azimuth --> -73.020950,40.832570,0
    <!-- 130 degrees azimuth --> -73.018590,40.840780,0
    <!-- 129 degrees azimuth --> -73.016390,40.848910,0
    <!-- 128 degrees azimuth --> -73.014160,40.856840,0
    <!-- 127 degrees azimuth --> -73.011980,40.864640,0
    <!-- 126 degrees azimuth --> -73.009930,40.872360,0
    <!-- 125 degrees azimuth --> -73.007930,40.879950,0
    <!-- 124 degrees azimuth --> -73.005940,40.887410,0
    <!-- 123 degrees azimuth --> -73.004080,40.894800,0
    <!-- 122 degrees azimuth --> -72.990180,40.896100,0
    <!-- 121 degrees azimuth --> -72.975520,40.897360,0
    <!-- 120 degrees azimuth --> -72.959860,40.898530,0
    <!-- 119 degrees azimuth --> -72.943300,40.899670,0
    <!-- 118 degrees azimuth --> -72.925620,40.900740,0
    <!-- 117 degrees azimuth --> -72.906580,40.901700,0
    <!-- 116 degrees azimuth --> -72.886060,40.902560,0
    <!-- 115 degrees azimuth --> -72.863930,40.903330,0
    <!-- 114 degrees azimuth --> -72.839740,40.903930,0
    <!-- 113 degrees azimuth --> -72.818670,40.906210,0
    <!-- 112 degrees azimuth --> -72.798720,40.909370,0
    <!-- 111 degrees azimuth --> -72.777520,40.912620,0
    <!-- 110 degrees azimuth --> -72.754840,40.915930,0
    <!-- 109 degrees azimuth --> -72.730440,40.919300,0
    <!-- 108 degrees azimuth --> -72.704200,40.922770,0
    <!-- 107 degrees azimuth --> -72.675770,40.926330,0
    <!-- 106 degrees azimuth --> -72.644780,40.929970,0
    <!-- 105 degrees azimuth --> -72.611000,40.933760,0
    <!-- 104 degrees azimuth --> -72.506630,40.923500,0
    <!-- 103 degrees azimuth --> -72.410470,40.917610,0
    <!-- 102 degrees azimuth --> -72.374490,40.925320,0
    <!-- 101 degrees azimuth --> -72.366790,40.938710,0
    <!-- 100 degrees azimuth --> -72.359150,40.952220,0
    <!-- 99 degrees azimuth --> -72.351570,40.965830,0
    <!-- 98 degrees azimuth --> -72.339830,40.979010,0
    <!-- 97 degrees azimuth --> -72.323180,40.991860,0
    <!-- 96 degrees azimuth --> -72.221070,40.996270,0
    <!-- 95 degrees azimuth --> -72.219300,41.012330,0
    <!-- 94 degrees azimuth --> -72.217910,41.028400,0
    <!-- 93 degrees azimuth --> -71.979630,41.029190,0
    <!-- 92 degrees azimuth --> -71.947310,41.046750,0
    <!-- 91 degrees azimuth --> -71.645920,41.054160,0
    <!-- 90 degrees azimuth --> -71.643510,41.077660,0
    <!-- 89 degrees azimuth --> -71.986070,41.106030,0
    <!-- 88 degrees azimuth --> -72.267780,41.124550,0
    <!-- 87 degrees azimuth --> -72.072090,41.142900,0
    <!-- 86 degrees azimuth --> -71.027930,41.184980,0
    <!-- 85 degrees azimuth --> -71.238140,41.209790,0
    <!-- 84 degrees azimuth --> -71.497290,41.226350,0
    <!-- 83 degrees azimuth --> -71.801470,41.232650,0
    <!-- 82 degrees azimuth --> -71.904960,41.246200,0
    <!-- 81 degrees azimuth --> -72.015830,41.256290,0
    <!-- 80 degrees azimuth --> -72.134990,41.262520,0
    <!-- 79 degrees azimuth --> -72.307130,41.259050,0
    <!-- 78 degrees azimuth --> -72.703280,41.219710,0
    <!-- 77 degrees azimuth --> -73.070830,41.172720,0
    <!-- 76 degrees azimuth --> -73.129780,41.167670,0
    <!-- 75 degrees azimuth --> -73.150760,41.168020,0
    <!-- 74 degrees azimuth --> -73.172240,41.167710,0
    <!-- 73 degrees azimuth --> -73.187400,41.168190,0
    <!-- 72 degrees azimuth --> -73.188660,41.171430,0
    <!-- 71 degrees azimuth --> -73.190000,41.174650,0
    <!-- 70 degrees azimuth --> -73.191410,41.177860,0
    <!-- 69 degrees azimuth --> -73.192900,41.181050,0
    <!-- 68 degrees azimuth --> -73.194460,41.184210,0
    <!-- 67 degrees azimuth --> -73.196090,41.187360,0
    <!-- 66 degrees azimuth --> -73.197800,41.190480,0
    <!-- 65 degrees azimuth --> -73.199580,41.193590,0
    <!-- 64 degrees azimuth --> -73.201430,41.196660,0
    <!-- 63 degrees azimuth --> -73.203350,41.199720,0
    <!-- 62 degrees azimuth --> -73.205340,41.202740,0
    <!-- 61 degrees azimuth --> -73.207400,41.205740,0
    <!-- 60 degrees azimuth --> -73.209540,41.208720,0
    <!-- 59 degrees azimuth --> -73.211740,41.211660,0
    <!-- 58 degrees azimuth --> -73.214010,41.214580,0
    <!-- 57 degrees azimuth --> -73.216340,41.217460,0
    <!-- 56 degrees azimuth --> -73.218750,41.220320,0
    <!-- 55 degrees azimuth --> -73.221220,41.223140,0
    <!-- 54 degrees azimuth --> -73.223750,41.225930,0
    <!-- 53 degrees azimuth --> -73.226350,41.228680,0
    <!-- 52 degrees azimuth --> -73.229010,41.231400,0
    <!-- 51 degrees azimuth --> -73.231740,41.234090,0
    <!-- 50 degrees azimuth --> -73.234530,41.236740,0
    <!-- 49 degrees azimuth --> -73.237380,41.239350,0
    <!-- 48 degrees azimuth --> -73.240290,41.241920,0
    <!-- 47 degrees azimuth --> -73.243260,41.244460,0
    <!-- 46 degrees azimuth --> -73.246290,41.246950,0
    <!-- 45 degrees azimuth --> -73.249370,41.249410,0
    <!-- 44 degrees azimuth --> -73.252520,41.251820,0
    <!-- 43 degrees azimuth --> -73.255710,41.254190,0
    <!-- 42 degrees azimuth --> -73.258970,41.256520,0
    <!-- 41 degrees azimuth --> -73.262270,41.258810,0
    <!-- 40 degrees azimuth --> -73.265630,41.261060,0
    <!-- 39 degrees azimuth --> -73.269050,41.263250,0
    <!-- 38 degrees azimuth --> -73.272510,41.265410,0
    <!-- 37 degrees azimuth --> -73.276020,41.267520,0
    <!-- 36 degrees azimuth --> -73.279580,41.269580,0
    <!-- 35 degrees azimuth --> -73.283190,41.271590,0
    <!-- 34 degrees azimuth --> -73.286840,41.273560,0
    <!-- 33 degrees azimuth --> -73.290540,41.275480,0
    <!-- 32 degrees azimuth --> -73.294290,41.277350,0
    <!-- 31 degrees azimuth --> -73.298080,41.279160,0
    <!-- 30 degrees azimuth --> -73.301910,41.280930,0
    <!-- 29 degrees azimuth --> -73.305780,41.282650,0
    <!-- 28 degrees azimuth --> -73.309690,41.284320,0
    <!-- 27 degrees azimuth --> -73.313630,41.285940,0
    <!-- 26 degrees azimuth --> -73.317620,41.287500,0
    <!-- 25 degrees azimuth --> -73.321640,41.289010,0
    <!-- 24 degrees azimuth --> -73.325690,41.290470,0
    <!-- 23 degrees azimuth --> -73.329780,41.291880,0
    <!-- 22 degrees azimuth --> -73.333900,41.293230,0
    <!-- 21 degrees azimuth --> -73.338060,41.294520,0
    <!-- 20 degrees azimuth --> -73.342240,41.295760,0
    <!-- 19 degrees azimuth --> -73.346450,41.296950,0
    <!-- 18 degrees azimuth --> -73.350690,41.298080,0
    <!-- 17 degrees azimuth --> -73.354950,41.299160,0
    <!-- 16 degrees azimuth --> -73.359240,41.300170,0
    <!-- 15 degrees azimuth --> -73.363550,41.301140,0
    <!-- 14 degrees azimuth --> -73.367880,41.302040,0
    <!-- 13 degrees azimuth --> -73.372230,41.302890,0
    <!-- 12 degrees azimuth --> -73.376600,41.303680,0
    <!-- 11 degrees azimuth --> -73.380990,41.304410,0
    <!-- 10 degrees azimuth --> -73.385400,41.305090,0
    <!-- 9 degrees azimuth --> -73.389820,41.305710,0
    <!-- 8 degrees azimuth --> -73.394260,41.306270,0
    <!-- 7 degrees azimuth --> -73.398700,41.306770,0
    <!-- 6 degrees azimuth --> -73.403160,41.307210,0
    <!-- 5 degrees azimuth --> -73.407630,41.307590,0
    <!-- 4 degrees azimuth --> -73.412110,41.307920,0
    <!-- 3 degrees azimuth --> -73.416590,41.308180,0
    <!-- 2 degrees azimuth --> -73.421080,41.308390,0
    <!-- 1 degrees azimuth --> -73.425570,41.308540,0
    <!-- 0 degrees azimuth --> -73.430070,41.308630,0`;