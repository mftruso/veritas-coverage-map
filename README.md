# Veritas Catholic Media Broadcast Coverage Map

[![Netlify Status](https://api.netlify.com/api/v1/badges/fb1aace3-b454-48bf-960a-e351905e11c1/deploy-status)](https://app.netlify.com/sites/veritas-coverage-map/deploys)

Displays the radio frequency coverage for AM 1350 WNLK

Data is taken from the FCC website: https://www.fcc.gov/media/radio/am-and-fm-single-frequency-maps
They provide a Google Earth KML (see `data` directory) file which contains coordinates that can be converted into a Polygon (see `data/parser.js`)

## Project setup

### Built with
- Vue 2
- [ArcGIS JS API](https://developers.arcgis.com/javascript/latest/)

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Build
Pushes to `master` are automatically deployed to Netlify. The Veritas website embeds this site in an [iframe](https://support.wix.com/en/article/wix-editor-embedding-a-site-or-a-widget#adding-an-html-iframe).
