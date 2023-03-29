import Experience from "./Experience";
import * as THREE from 'three';

export default class Renderer {
    constructor() {
        this.experience = new Experience();
        this.camera = this.experience.camera;
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;


        // Renderer functions
        this.setRenderer();
        this.resize();
        this.update();
    }


    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});


        /**
         * Set PBR for render
         * Set tone mapping
         * Set tone mapping exposure
         * Set renderer size
         * Set pixel ratio
         */
        this.renderer.physicallyCorrectLights = true
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixeRatio);
    }


    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixeRatio);
    }


    update() {
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
    }
} 