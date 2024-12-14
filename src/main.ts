
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import './style.scss'
import { Scene, SceneController } from "./SceneController";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="p-section-hero">
    <h1 class="p-section-hero__title">Hero</h1>
  </section>
  <div class="l-scroll">
    <div  class="l-scroll__sticky">
      <div id="map"></div>
    </div>
    <div class="l-scroll__static">
      <section class="p-section-intro" data-scene-index="1">
        <h2 class="p-section-intro__title">Intro</h2>
      </section>
      <section class="p-section-about" data-scene-index="2">
        <h2 class="p-section-about__title">About</h2>
      </section>
    </div>
  </div>
  <section class="p-section-contact">
    <h2 class="p-section-contact__title">Contact</h2>
  </section>
`;

const mapElement=document.querySelector<HTMLElement>("#map");
if(!mapElement){
  throw new Error("mapElement is null")
}

const map = new maplibregl.Map({
  container: mapElement,
  // style:"https://tile2.openstreetmap.jp/styles/osm-bright/style.json",
  style:"https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json",
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
  zoom: 18, // starting zoom
  // https://maplibre.org/maplibre-gl-js/docs/examples/toggle-interaction-handlers/
  scrollZoom:false,
  boxZoom:false,
  dragRotate:false,
  dragPan:false,
  keyboard:false,
  doubleClickZoom:false,
  touchZoomRotate:false,
});

const SCENE_LIST:Scene[]=[
  {
    index:1,
    bounds:[[135.5201585,34.6817597],[135.5343801,34.6913731]],
    // bounds:[[32.958984, -5.353521], [43.50585, 5.615985]],
  },
  {
    index:2,
    bounds:[[135.4889978,34.6872712],[135.4970075,34.6830593]],
  },
];

const sceneController=new SceneController(map,SCENE_LIST);


const intersectionObserverOption={
  rootMargin:"0px 0px 0px 0px",
  threshold:0,
};
const intersectionObserver = new IntersectionObserver((entries)=>{
  for(let entry of entries){
    if(entry.isIntersecting){
      const sceneElement=entry.target as HTMLElement;
      const sceneIndex=Number(sceneElement.dataset.sceneIndex);
      sceneController.updateScene(sceneIndex);
    }
  
  }

},intersectionObserverOption);


const sceneElementList = document.querySelectorAll<HTMLElement>("[data-scene-index");
for(let sceneElement of sceneElementList){
  intersectionObserver.observe(sceneElement);

}


