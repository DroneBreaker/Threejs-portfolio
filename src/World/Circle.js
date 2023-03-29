import Experience from "../Experience/Experience";
import * as THREE from 'three'

export default class Circle {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;


        //Add geometry
        const geometry = new THREE.SphereGeometry(0.4, 20, 10);

        // Add a material
        const material = new THREE.MeshStandardMaterial({
            color: 'white', 
            metalness: 0.8, 
            roughness: 0.8, 
            side: THREE.DoubleSide
        })


        // Add to mesh
        const circle = new THREE.Mesh(geometry, material);
        circle.position.set(13, -4, 0)
        circle.castShadow = true;
        circle.receiveShadow = true;


        // Add to scene
        this.scene.add(circle)
    }
}