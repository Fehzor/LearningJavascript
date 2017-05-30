var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight, 5, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(3, 10, 10, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;

var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();

var spin = new Worker("js/code/spinner.js");
spin.onmessage = function(event){;
    cube.rotation.y = event.data;
    //Hold space = reverse rotation
    if(keyPressed(32)){
        cube.rotation.y = -1*event.data;
    }
    
    //f = rotate on x axist 1
    if(firstPress(70)){
        cube.rotation.x += 1;
    }
    
    
    //asdw = move around
    if(keyPressed(65)){
        cube.position.x -= 1;
    }
    
    if(keyPressed(68)){
        cube.position.x += 1;
    }
    
    if(keyPressed(87)){
        cube.position.y += 1;
    }
    
    if(keyPressed(83)){
        cube.position.y -= 1;
    }
    
    //Keys must be reset every frame.
    resetKeys();
    
};