import "./style.css";
import * as THREE from 'three';

// We always need three objects
// 1. scene: Like a container that holds all objects, cameras, and lights 
// 2. Camera: helps us look at things inside the scenes 
// 3. Renderer: renders actual graphics to the scene 
const scene = new THREE.Scene();
new camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

// Set pixel ratio and screen 
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30); 

renderer.render( scene, camera );