import { EventEmitter } from "events";
import Experience from "../Experience/Experience";

export default class Sizes extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height
        this.pixeRatio = Math.min(window.devicePixelRatio, 2)


        // Sizes functions
        this.resize();
        this.update();


        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width / this.height
            this.pixeRatio = window.devicePixelRatio
            this.emit('resize');
        })
    }


    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height
        this.pixeRatio = window.devicePixelRatio
    }


    update() {
        
    }
}