
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="map"></div>
`;


const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

