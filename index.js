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


document.addEventListener("DOMContentLoaded", async  (event) => {



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

  
  await viewer.loadFmBuffer(buf);

  Spinner.classList.add('hidden');
  await viewer.renderAll();
  
const emailInput=document.querySelector('input[name="email"]');
emailInput.addEventListener('change',(e)=>{
  const y = document.getElementById('validEmail');
  const btn = document.querySelector('button[type=submit]');
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!emailInput.value.match(validRegex)){
    y.style.display='block';
    btn.disabled = true;
  }else{
    y.style.display = 'none';
    btn.disabled = false;
  }


})



  const form = document.querySelector('form');
  form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    alert('started');
    const data = new FormData(formElem);
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
   



    try{
      let response = await fetch('https://academygenious.kz/mail.php',{
        method: 'POST',
        body:  data
      });
      // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

      console.log(response);
      const statu = await response.status;
      console.log(statu,'it was status code');
      console.log(response.ok);
      console.log('started test',response.ok);
      if(statu!==200){
        throw new Error;
      }
      document.querySelectorAll('input')[0].value='';
      document.querySelectorAll('input')[1].value='';
      document.querySelector('textarea').value='';
      const p = document.getElementById('alert')
      p.classList.add('animation');
      setTimeout(()=>{
        p.classList.remove('animation');
      },3000)

    }catch{

      const p = document.getElementById('ErrorAlert');
      p.classList.add('animation');
      setTimeout(()=>{
        p.classList.remove('animation');
      },3000)   
    }


     
     
    //   let response = await fetch('https://olympeducation.kz/mail.php',{
    //     mode: 'no-cors',
    //     method: 'POST',
    //     body:  data
    //   });
    //   console.log(response);
    //   console.log(Status,'it was status code');
    //   console.log(response.ok);
    //   console.log('started test',response.ok);
    //  if(response.ok===false){
    //   throw new Error;
    //  }
    // //  console.log('ended test')
    // //   console.log('block to try');
    //   document.querySelectorAll('input')[0].value='';
    //   document.querySelectorAll('input')[1].value='';
    //   document.querySelector('textarea').value='';
    //   const p = document.getElementById('alert')
    //   p.classList.add('animation');
    //   setTimeout(()=>{
    //     p.classList.remove('animation');
    //   },3000)
     
         







// /block to

  












    // let response = await fetch('https://olympeducation.kz/mail.php',{
    //   mode: 'no-cors',
    //   method: 'POST',
    //   body:  data
    // });
    

  

  });







  const carousel = document.querySelector(".carousel");
  carousel.children[0].classList.add('blackBorder');




  carousel.addEventListener("click", async (event) => {
    Spinner.classList.remove('hidden');



    const carouselImages = carousel.children

    let i = 0;
    while (i < carouselImages.length){
  
      carouselImages.item(i).classList.remove('blackBorder');

    if(carouselImages.item(i)==event.target||carouselImages.item(i).children[0]==event.target){
      carouselImages.item(i).classList.add('blackBorder');
     if(RenderedItem==i){
      
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
      throw "failed to fetch a model";
    }

    let buf = await resp.arrayBuffer();
    // console.log(resp.arrayBuffer.length);
    console.log(buf);
    await viewer.loadFmBuffer(buf);
    Spinner.classList.add('hidden');
    await viewer.renderAll();


     }
  
    }

      i++;
    };









  
  });
});
