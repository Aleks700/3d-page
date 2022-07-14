import * as fmViewer from "./viewer.js";

console.log("started");

const SCAN_WIDTH = "1000px";
const SCAN_HEIGHT = "1000px";

const SCANS = [

  {
    id: "bag",
    file: "bag.fm",
  },
  {
    id: "boots",
    file: "boots.fm",
  },
  {
    id: "puppet",
    file: "puppet.fm",
  },
  {
    id: "backpack",
    file: "backpack.fm",
  }
];

document.addEventListener("DOMContentLoaded", async (event) => {
  const Spinner = document.getElementsByClassName('spinner')[0];
  console.log(Spinner);
  let  RenderedItem = 0;
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

  let resp = await fetch("/scan/" + SCANS[0].file);
  if (!resp.ok) {
    throw "failed to fetch a model ";
  }

  let buf = await resp.arrayBuffer();
  console.log(resp.arrayBuffer.length);
  console.log(buf);
  
  await viewer.loadFmBuffer(buf);

  Spinner.classList.add('hidden');
  await viewer.renderAll();
  



  const carousel = document.querySelector(".carousel");
  carousel.children[0].classList.add('blackBorder');




  carousel.addEventListener("click", async (event) => {
    Spinner.classList.remove('hidden');


    console.log(carousel.childNodes);
    const carouselImages = carousel.children
    console.log(carouselImages.item(1));
    console.log(carouselImages,'carouselImages');
    let i = 0;
    while (i < carouselImages.length){
  
      carouselImages.item(i).classList.remove('blackBorder');

    if(carouselImages.item(i)==event.target||carouselImages.item(i).children[0]==event.target){
      carouselImages.item(i).classList.add('blackBorder');
     if(RenderedItem==i){
      console.log('Уже отрендерено')
     }else{
      RenderedItem = i;
      console.log('Новый рендер')
     }
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
    block.appendChild(Spinner);
    
    let viewer = fmViewer.Viewer.create(canvas);

    let resp = await fetch("/scan/" + SCANS[RenderedItem].file);
    if (!resp.ok) {
      throw "failed to fetch a model ";
    }

    let buf = await resp.arrayBuffer();
    // console.log(resp.arrayBuffer.length);
    console.log(buf);
    await viewer.loadFmBuffer(buf);
    Spinner.classList.add('hidden');
    await viewer.renderAll();


  
  });
});
