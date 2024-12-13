
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="p-section-hero">
    <h1 class="p-section-hero__title">Hero</h1>
  </section>
  <div class="l-scroll">
    <div  class="l-scroll__sticky">
      <div id="map"></div>
    </div>
    <div class="l-scroll__static">
      <section class="p-section-intro">
        <h2 class="p-section-intro__title">Intro</h2>
      </section>
      <section class="p-section-about">
        <h2 class="p-section-about__title">About</h2>
      </section>
    </div>
  </div>
  <section class="p-section-contact">
    <h2 class="p-section-contact__title">Contact</h2>
  </section>
`;


const map = new maplibregl.Map({
  container: 'map',
  style:"https://tile2.openstreetmap.jp/styles/osm-bright/style.json",
  // style: {
  //     version: 8,
  //     sources: {
  //         rtile: {
  //             type: 'raster',
  //             tiles: [
  //                 'https://tile.openstreetmap.jp/{z}/{x}/{y}.png',
  //             ],
  //             tileSize: 256,
  //             attribution:
  //                 '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  //         },
  //     },
  //     layers: [
  //         {
  //             id: 'raster-tiles',
  //             type: 'raster',
  //             source: 'rtile',
  //             minzoom: 0,
  //             maxzoom: 22,
  //         },
  //     ],
  // },
  center: [135.4948501,34.6856111], // starting position [lng, lat]
  zoom: 18 // starting zoom
});

