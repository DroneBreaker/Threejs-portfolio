import Experience from "../Experience/Experience";
import * as THREE from 'three';

export default class GroundBox {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        
        // Add geometry
        const geometry = new THREE.BoxGeometry(3, 3);

        // Add a material
        const material = new THREE.MeshStandardMaterial({color: 0x0000ff, side: THREE.DoubleSide});

        // Add geometry and material to mesh
        const groundBox = new THREE.Mesh(geometry, material);

        // Add to scene
        this.scene.add(groundBox);
        groundBox.position.set(10, -1.6, 0);
        // groundBox.rotation.set(0, 15, 0);
    }
}