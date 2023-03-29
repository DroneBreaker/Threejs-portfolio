import Experience from "../Experience/Experience";
import Environment from "./Environment";
import GroundBox from "./GroundBox";
import Line from "./Line";
import Circle from "./Circle";

export default class World {
    constructor() {
        this.experience = new Experience();
        // this.scene = this.experience.scene;
        

        //Add to the world
        this.environment = new Environment();
        this.circle = new Circle();
        this.line = new Line();
        this.groundBox = new GroundBox();
    }
}