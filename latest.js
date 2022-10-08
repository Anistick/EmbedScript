var psce = document.createElement("link");
psce.rel = "stylesheet";
psce.href = "https://pyscript.net/latest/pyscript.css";
var psjse = document.createElement("script");
psjse.defer = true;
psjse.src = "https://pyscript.net/latest/pyscript.js";
var est = "es";
var typeArray = [
  "py-script",
  "pure-js"
];
let isPyAdded;

function addpy() {
  if (isPyAdded !== true) {
    document.body.appendChild(psce);
    document.body.appendChild(psjse);
    isPyAdded = true;
  }
}
var typeArrayJson = {
  "py-script": "py-script",
  "pure-js": "pure-js"
};
var eseArray = document.getElementsByTagName(est);
function addjs(iv) {
	let isDefer, isAsync;
  let njs = document.createElement("script");
  if (iv.defer) {
  	isDefer = true;
  }
  if (iv.async) {
  	isAsync = true;
  }
  if (isDefer) {
  	njs.defer = true;
  }
  if (isAsync) {
  	njs.async = true;
  }
  njs.textContent = iv;
  document.body.appendChild(njs);
  
}
function doese(i) {
  if (eseArray[i].getAttribute("type") == typeArrayJson["py-script"]) {
    if (isPyAdded !== true) {
      addpy();
    }
    if (isPyAdded == true) {
      //console.log("IPA to document already added");
    }
  }
  if (eseArray[i].getAttribute("type") == typeArrayJson["pure-js"]) {
  	addjs(eseArray[i].textContent);
  }
}
for (let i = 0; i < eseArray.length; i++) {
  for (let iz = 0; iz < typeArray.length; iz++) {
  	eseArray[i].style.display = "none";
    if (eseArray[i].getAttribute("type") == typeArray[iz]) {
      doese(i);
      break;
    }
    if (iz == typeArray.length - 1 && eseArray[i].getAttribute("type") !== typeArray[iz]) {
      throw `Type ${eseArray[i].getAttribute("type")} is not type of ${typeArray[iz]}`;
    } else {
      continue;
    }
  }
}
