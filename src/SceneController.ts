import type { LngLatBoundsLike, Map } from "maplibre-gl";

export interface Scene{
  index:number;
  bounds:LngLatBoundsLike;
}


export class SceneController{
  map:Map;
  currentSceneIndex:number;
  sceneList:Scene[];
  constructor(map:Map,sceneList:Scene[]){
    this.map=map;
    this.sceneList=sceneList;
    this.currentSceneIndex=-1;

  }
  updateScene(sceneIndex:number){
    if(this.currentSceneIndex!=sceneIndex){
      const scene=this.sceneList.find((scene)=>scene.index==sceneIndex);
      if(!scene){
        throw new Error("scene not found");
      }
      console.log(scene.index,scene.bounds);
      this.map.fitBounds(scene.bounds,{
        speed:2,
      });
      this.currentSceneIndex=sceneIndex;
    }
  }
}
