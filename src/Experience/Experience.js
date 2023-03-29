import * as THREE from 'three'
import Sizes from '../Utils/Sizes';
import Time from '../Utils/Time';
import World from '../World/World';
import Camera from './Camera';
import Renderer from './Renderer';

export default class Experience {
    static instance
    constructor(canvas) {
        if(Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas


        /**
         * Create the scene
         * Camera 
         * And Renderer
         */
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('lightgray');
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();


         // Event emitter for time class
         this.time.on('update', () => {
            this.update();
        })


        // Event emitter for sizes class
        this.sizes.on('resize', () => {
            this.resize();
        })
    }


    update() {
        this.camera.update();
        this.renderer.update();
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }
}