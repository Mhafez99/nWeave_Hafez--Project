import * as THREE from 'three';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
/** --------------------------------------------------- Canvas ---------------------------------------------------*/

let renderer, scene, camera;
let width, height, cx, cy, wWidth, wHeight;
const TMath = THREE.MathUtils;

let conf = {
  color: 0xffffff,
  objectWidth: 12,
  objectThickness: 3,
  ambientColor: 0x808080,
  light1Color: 0xffffff,
  shadow: false,
  perspective: 75,
  cameraZ: 75,
};

let objects = [];
let geometry, material;
let nx, ny;

init();

function init() {
  renderer = new THREE.WebGLRenderer({canvas: document.getElementById('webgl'), antialias: true, alpha: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(conf.perspective, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = conf.cameraZ;

  scene = new THREE.Scene();
  geometry = new THREE.BoxGeometry(conf.objectWidth, conf.objectWidth, conf.objectThickness);

  window.addEventListener('load', initScene);

  animate();
};

function initScene() {
  onResize();
  scene = new THREE.Scene();
  initLights();
  initObjects();
}

function initLights() {
  scene.add(new THREE.AmbientLight(conf.ambientColor));
  let light = new THREE.PointLight(0xffffff);
  light.position.z = 100;
  scene.add(light);
}

function initObjects() {
  objects = [];
  nx = Math.round(wWidth / conf.objectWidth) + 1;
  ny = Math.round(wHeight / conf.objectWidth) + 1;
  let mesh, x, y;
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      material = new THREE.MeshLambertMaterial({color: conf.color, transparent: true, opacity: 1});
      mesh = new THREE.Mesh(geometry, material);
      x = -wWidth / 2 + i * conf.objectWidth;
      y = -wHeight / 2 + j * conf.objectWidth;
      mesh.position.set(x, y, 0);
      objects.push(mesh);
      scene.add(mesh);
    }
  }
  document.body.classList.add('loaded');
  startAnim();
}

function startAnim() {
  document.body.classList.remove('revealed');
  objects.forEach(mesh => {
    mesh.rotation.set(0, 0, 0);
    mesh.material.opacity = 1;
    mesh.position.z = 0;
    let delay = TMath.randFloat(1, 2);
    let rx = TMath.randFloatSpread(2 * Math.PI);
    let ry = TMath.randFloatSpread(2 * Math.PI);
    let rz = TMath.randFloatSpread(2 * Math.PI);
    gsap.to(mesh.rotation, 2, {x: rx, y: ry, z: rz, delay: delay});
    gsap.to(mesh.position, 2, {z: 80, delay: delay + 0.5, ease: "easeOut"});
    gsap.to(mesh.material, 2, {opacity: 0, delay: delay + 0.5});
  });
  setTimeout(() => {
    document.body.classList.add('revealed');
  }, 4500);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

function onResize() {
  let size;
  width = window.innerWidth; cx = width / 2;
  height = window.innerHeight; cy = height / 2;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  size = getRendererSize();
  wWidth = size[0];
  wHeight = size[1];
}
window.addEventListener("resize", () => {
  onResize();
});

function getRendererSize() {
  const cam = new THREE.PerspectiveCamera(conf.perspective, camera.aspect);
  const vFOV = cam.fov * Math.PI / 180;
  const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
  const width = height * cam.aspect;
  return [width, height];
}


/** --------------------------------------------------- GSAP ---------------------------------------------------*/


/** --------------------------------------------------- Dynamic ---------------------------------------------------*/

// Toggle takeover-nav and sticky-nav classes
document.getElementById("nav-btn").addEventListener("click", function() {
  document.getElementById('takeover-nav').classList.toggle("shown");
});

// Initialization Variables
var icon_1 = document.getElementById("nav-btn");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";  // can be "menu" or "arrow"
var topLineY_1;
var middleLineY_1;
var bottomLineY_1;
var topLeftY_1;
var topRightY_1;
var bottomLeftY_1;
var bottomRightY_1;
var topLeftX_1;
var topRightX_1;
var bottomLeftX_1;
var bottomRightX_1;

// Animation Variables
var segmentDuration_1 = 10;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;
var currentFrame_1 = 1;

var AJS = {
  easeInBack: function(start, end, duration, currentFrame) {
    return start + (end - start) * (currentFrame / duration);
  },
  easeOutBack: function(start, end, duration, currentFrame) {
    return start + (end - start) * (currentFrame / duration);
  },
};

// Menu Disappear Animation
function menuDisappearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= menuDisappearDurationInFrames_1) {
    window.requestAnimationFrame(function() {
      //top line
      topLineY_1 = AJS.easeInBack(37, 50, menuDisappearDurationInFrames_1, currentFrame_1);
      topLine_1.setAttribute("d", "M30," + topLineY_1 + " L70," + topLineY_1);
      //bottom line
      bottomLineY_1 = AJS.easeInBack(63, 50, menuDisappearDurationInFrames_1, currentFrame_1);
      bottomLine_1.setAttribute("d", "M30," + bottomLineY_1 + " L70," + bottomLineY_1);
      //recursion
      menuDisappearAnimation_1();
    });
  } else {
    middleLine_1.style.opacity = "0";
    currentFrame_1 = 1;
    menuDisappearComplete_1 = true;
    openMenuAnimation_1();
  }
}

// Cross Appear Animation
function arrowAppearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= arrowAppearDurationInFrames_1) {
    window.requestAnimationFrame(function() {
      //top line
      topLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      topLeftY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      bottomRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      bottomRightY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
      //bottom line
      bottomLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      bottomLeftY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      topRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      topRightY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
      //recursion
      arrowAppearAnimation_1();
    });
  } else {
    currentFrame_1 = 1;
    arrowAppearComplete_1 = true;
    openMenuAnimation_1();
  }
}

// Combined Open Menu Animation
function openMenuAnimation_1() {
  if (!menuDisappearComplete_1) {
    menuDisappearAnimation_1();
  } else if (!arrowAppearComplete_1) {
    arrowAppearAnimation_1();
  }
}

// Cross Disappear Animation
function arrowDisappearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= arrowDisappearDurationInFrames_1) {
    window.requestAnimationFrame(function() {
      //top line
      topLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
      topLeftY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      bottomRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
      bottomRightY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
      //bottom line
      bottomLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
      bottomLeftY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      topRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
      topRightY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
      //recursion
      arrowDisappearAnimation_1();
    });
  } else {
    middleLine_1.style.opacity = "1";
    currentFrame_1 = 1;
    arrowDisappearComplete_1 = true;
    closeMenuAnimation_1();
  }
}

// Menu Appear Animation
function menuAppearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= menuAppearDurationInFrames_1) {
    window.requestAnimationFrame(function() {
      //top line
      topLineY_1 = AJS.easeOutBack(50, 37, menuDisappearDurationInFrames_1, currentFrame_1);
      topLine_1.setAttribute("d", "M30," + topLineY_1 + " L70," + topLineY_1);
      //bottom line
      bottomLineY_1 = AJS.easeOutBack(50, 63, menuDisappearDurationInFrames_1, currentFrame_1);
      bottomLine_1.setAttribute("d", "M30," + bottomLineY_1 + " L70," + bottomLineY_1);
      //recursion
      menuAppearAnimation_1();
    });
  } else {
    currentFrame_1 = 1;
    menuAppearComplete_1 = true;
    closeMenuAnimation_1();
  }
}

// Close Menu Animation
function closeMenuAnimation_1() {
  if (!arrowDisappearComplete_1) {
    arrowDisappearAnimation_1();
  } else if (!menuAppearComplete_1) {
    menuAppearAnimation_1();
  }
}

// Events
icon_1.addEventListener("click", function() {
  if (state_1 === "menu") {
    openMenuAnimation_1();
    state_1 = "arrow";
    arrowDisappearComplete_1 = false;
    menuAppearComplete_1 = false;
  } else if (state_1 === "arrow") {
    closeMenuAnimation_1();
    state_1 = "menu";
    menuDisappearComplete_1 = false;
    arrowAppearComplete_1 = false;
  }
});

// Cursor
document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a, button, #nav-btn, input.btn");

  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      gsap.to(cursor, 0.5, {
        opacity: 1
      });
      initCursor = true;
    }

    gsap.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.ontouchmove = function(e) {
    var mouseX = e.touches[0].clientX;
    var mouseY = e.touches[0].clientY;
    if (!initCursor) {
      gsap.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    gsap.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    gsap.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };

  window.ontouchstart = function(e) {
    gsap.to(cursor, 0.3, {
      opacity: 1
    });
  };

  window.ontouchend = function(e) {
    setTimeout(function() {
      gsap.to(cursor, 0.3, {
        opacity: 0
      });
    }, 200);
  };
});
