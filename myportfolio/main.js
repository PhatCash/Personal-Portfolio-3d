import "./style.css";
import * as THREE from "three";

// We always need three objects
// 1. scene: Like a container that holds all objects, cameras, and lights
// 2. Camera: helps us look at things inside the scenes
// 3. Renderer: renders actual graphics to the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

// Set pixel ratio and screen
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create an object
// 1. Geometry - the x, y, and z points that make up the shape
// 2. Material - Wrapping paper for an object
// 3. Mesh - geometry + material
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);

// Add to scene
scene.add(torus);

// Use a recursive function that gives a infinite loop that calls the render function automatically
// first line just tells the browser that we want to perform an animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
