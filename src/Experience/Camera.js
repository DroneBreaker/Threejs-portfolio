import Experience from "./Experience";
import * as THREE from 'three';

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;


        // Camera functions
        this.createPerspectiveCamera();
    }


    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(65, this.sizes.aspect, 0.1, 1000);
        
        // Add to scene
        this.scene.add(this.perspectiveCamera);

        // Change camera position
        this.perspectiveCamera.position.set(5, 0, 10);
        this.perspectiveCamera.castShadow = true;
        this.perspectiveCamera.receiveShadow = true;
        // this.perspectiveCamera.updateProjectionMatrix();
    }


    resize() {
         // Update camera projection on resize
         this.perspectiveCamera.aspect = this.sizes.aspect;
         this.perspectiveCamera.updateProjectionMatrix();
    }


    update() {
        
    }
}