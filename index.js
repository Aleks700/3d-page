import * as fmViewer from './viewer.js';

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
  await fmViewer.default();
  console.log(fmViewer);
  console.log('123123');

//   for (let scan of SCANS) {
//     let canvas = document.createElement('canvas');
//     const block = document.getElementById('canvasBlock');
//     console.log(block);
//     document.body.appendChild(canvas);
//     canvas.id = scan.id;

//     canvas.setAttribute('height', SCAN_HEIGHT);
//     canvas.setAttribute('width', SCAN_WIDTH);

//     let viewer = fmViewer.Viewer.create(canvas);

//     let resp = await fetch('https://silindo.com/fitsme/scan/' + scan.file);
//     if (!resp.ok) {
//       throw 'failed to fetch a model ' + scan.name;
//     }

//     let buf = await resp.arrayBuffer();
//     await viewer.loadFmBuffer(buf);

//     await viewer.renderAll();
//   }
});