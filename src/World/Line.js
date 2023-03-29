import Experience from "../Experience/Experience";
import * as THREE from 'three';

export default class Line {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;


        // Create a geometry
        const points = [];

        // First line
        points.push(new THREE.Vector3(23, 0, 0))
        points.push(new THREE.Vector3(0, -15, 0))
        points.push(new THREE.Vector3(23, 0, 0))

        // Second line
        points.push(new THREE.Vector3(21, 0, 0))
        points.push(new THREE.Vector3(0, -12, 0))
        points.push(new THREE.Vector3(21, 0, 0))

        // Third line
        points.push(new THREE.Vector3(19, 0, 0))
        points.push(new THREE.Vector3(0, -10, 0))
        points.push(new THREE.Vector3(19, 0, 0))

        // Fourth line
        points.push(new THREE.Vector3(16, 0, 0))
        points.push(new THREE.Vector3(0, -8.5, 0))
        points.push(new THREE.Vector3(16, 0, 0))

        // Fifth line
        points.push(new THREE.Vector3(12.5, 0, 0))
        points.push(new THREE.Vector3(0, -6.5, 0))
        points.push(new THREE.Vector3(12.5, 0, 0))

        // Sixth line
        // points.push(new THREE.Vector3(10.5, 0, 0))
        // points.push(new THREE.Vector3(0, -5, 0))
        // points.push(new THREE.Vector3(10.5, 0, 0))

        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        // Add a 
        const material = new THREE.LineBasicMaterial({color: 'black'});


        //add geomtry and material to mesh
        const line = new THREE.Line(geometry, material);


        // Add to scene
        this.scene.add(line);
        console.log(line)
    }
}