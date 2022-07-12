import * as fmViewer from "./viewer.js";

console.log("started");

const SCAN_WIDTH = "400px";
const SCAN_HEIGHT = "400px";

const SCANS = [
  {
    id: "backpack",
    file: "backpack.fm",
  },
  {
    id: "boots",
    file: "boots.fm",
  },
  {
    id: "bag",
    file: "bag.fm",
  },
  {
    id: "puppet",
    file: "puppet.fm",
  },
];

document.addEventListener("DOMContentLoaded", async (event) => {
  // console.log(carousel);

  await fmViewer.default();

  let canvas = document.createElement("canvas");
  const block = document.getElementById("canvasBlock");
  console.log(block);
  canvas.setAttribute("height", SCAN_HEIGHT);
  canvas.setAttribute("width", SCAN_WIDTH);
  block.appendChild(canvas);
  canvas.id = "scan.id";


  let viewer = fmViewer.Viewer.create(canvas);

  let resp = await fetch("/scan/" + "bag.fm");
  if (!resp.ok) {
    throw "failed to fetch a model ";
  }

  let buf = await resp.arrayBuffer();
  console.log(resp.arrayBuffer.length);
  console.log(buf);
  await viewer.loadFmBuffer(buf);

  await viewer.renderAll();



  const carousel = document.querySelector(".carousel");


  carousel.addEventListener("click", async (event) => {


    console.log(carousel.childNodes);
    const carouselImages = carousel.children
    console.log(carouselImages.item(1));
    console.log(carouselImages,'carouselImages');
    let i = 0;
    while (i < carouselImages.length){
  
    carouselImages.item(i).classList.add('blackBorder');
    if(carouselImages.item(i)==event.target||carouselImages.item(i).children[0]==event.target){
      console.log('clicked number was',i);
    }
      console.log(carouselImages.item(i));
      i++;
    };




    console.log(event.target,'это объект по которому был click')
    const clickedELement  = event.target;
    
    const block = document.getElementById("canvasBlock");
    let canvas = document.createElement("canvas");
    canvas.setAttribute("height", SCAN_HEIGHT);
    canvas.setAttribute("width", SCAN_WIDTH);
    block.replaceChildren(canvas);
    let viewer = fmViewer.Viewer.create(canvas);

    let resp = await fetch("/scan/" + "boots.fm");
    if (!resp.ok) {
      throw "failed to fetch a model ";
    }

    let buf = await resp.arrayBuffer();
    // console.log(resp.arrayBuffer.length);
    console.log(buf);
    await viewer.loadFmBuffer(buf);

    await viewer.renderAll();


  
  });
});
