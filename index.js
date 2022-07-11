import * as fmViewer from './viewer.js';






console.log('started')

const SCAN_WIDTH = '400px';
const SCAN_HEIGHT = '400px';

const SCANS = [
  {
    id: 'backpack',
    file: 'backpack.fm'
  },
  {
    id: 'boots',
    file: 'boots.fm'
  },
  {
    id: 'bag',
    file: 'bag.fm'
  },
  {
    id: 'puppet',
    file: 'puppet.fm'
  }
];

document.addEventListener('DOMContentLoaded', async event => {

  const carousel = document.querySelector('.carousel');
  console.log(carousel.childNodes);
  carousel.addEventListener('click', (event) =>{
    const clicked = event.currentTarget
    
    console.log(event.currentTarget); 
  })
  console.log(carousel);






  await fmViewer.default();



  // for (let scan of SCANS) {
    let canvas = document.createElement('canvas');
    const block = document.getElementById('canvasBlock');
    console.log(block);
    block.appendChild(canvas);
    canvas.id = 'scan.id'

    canvas.setAttribute('height', SCAN_HEIGHT);
    canvas.setAttribute('width', SCAN_WIDTH);
    // canvas.setStyle('height:100%,width:100%')

    let viewer = fmViewer.Viewer.create(canvas);

    let resp = await fetch('/scan/' + 'bag.fm');
    if (!resp.ok) {
      throw 'failed to fetch a model ';
    }
   
    let buf = await resp.arrayBuffer();
    console.log(resp.arrayBuffer.length);
    console.log(buf);
    await viewer.loadFmBuffer(buf);

    await viewer.renderAll();
  // }
});