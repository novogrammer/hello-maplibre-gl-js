
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
  style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

