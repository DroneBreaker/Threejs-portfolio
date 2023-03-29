import Experience from "../Experience/Experience";
import * as THREE from 'three';

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;


        // Environment functions
        this.setLight();
        this.setAmbientLight();
    }


    setLight() {
        this.light = new THREE.DirectionalLight('white', 8);

        //Set light position
        this.light.position.set(10, 10, 10);


        // Add to scene
        this.scene.add(this.light);
    }


    setAmbientLight() {
        this.ambientLight = new THREE.AmbientLight('white', 6);

        //Set light position
        this.ambientLight.position.set(10, 10, 10);


        // Add to scene
        this.scene.add(this.ambientLight);
    }
}