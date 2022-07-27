import * as fmViewer from "./viewer.js";

console.log("started");

const SCAN_WIDTH = "1000px";
const SCAN_HEIGHT = "700px";

const SCANS = [

  {
    id: "boots",
    file: "boots.fm",
  },
  {
    id: "tetra-pack",
    file: "tetra-pack.fm",
  },
  
  {
    id: "backpack",
    file: "backpack.fm",
  }
];

// #GetInTouch


// document.body.style.overflow = "hidden";


document.addEventListener("DOMContentLoaded", async (event) => {



const formButton = document.getElementById('formButton');
formButton.addEventListener('click',()=>{
  console.log('try work');
  // document.location='#GetInTouch';
  const form  = document.getElementById('formElem');
  // const child = form.querySelector('input');
  form.querySelector('input').focus();
  
  // console.log(child);

})


const burger = document.getElementById('burger');
burger.addEventListener('click',()=>{
  const toggleNav = document.getElementById('toggle-nav').classList.add('slideDown')
  console.log('clicked burger');
});


const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click',()=>{
  console.log('clicked CLose');
  const toggleNav = document.getElementById('toggle-nav').classList.remove('slideDown');
  toggleNav.classList.add('slideUp');
  
});


const links = document.querySelectorAll('.toggle-nav a');
links.forEach(element => {
    element.addEventListener('click',()=>{
      const toggleNav = document.getElementById('toggle-nav').classList.remove('slideDown');
      toggleNav.classList.add('slideUp');
    })
});

// for (let i=0;i++;links.length){

// }
document.getElementById('canvasBlock').addEventListener('mouseover',()=>{
  console.log('bitchis');
  document.body.style.overflow = "hidden";
})
document.getElementById('canvasBlock').addEventListener('mouseout',()=>{
  document.body.style.overflow = "auto";
})









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
  




  const form = document.querySelector('form');
  form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const data = new FormData(formElem);
        

  
    console.log('Event was prevent defaulted');
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
    console.log(inputs,'name');
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(textarea.value);

    let response = await fetch('https://olympeducation.kz/mail.php',{
      mode: 'no-cors',
      method: 'POST',
      body:  data
    });
    

  
    document.querySelectorAll('input')[0].value='';
    document.querySelectorAll('input')[1].value='';
    document.querySelector('textarea').value='';
    const p = document.getElementById('alert')
    p.classList.add('animation');
    setTimeout(()=>{
      p.classList.remove('animation');
    },3000)
  });







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
      console.log('Уже отрендерено');
      Spinner.classList.add('hidden');
     }else{
      RenderedItem = i;
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

      console.log('Новый рендер')
     }
      console.log('clicked number was',i);
    }
      console.log(carouselImages.item(i));
      i++;
    };







    console.log(event.target,'это объект по которому был click')
    

  
  });
});
