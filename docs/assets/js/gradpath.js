import GradientPath from '../../../node_modules/gradient-path';

const gp = new GradientPath({
  path: document.querySelector('#wavepath path'),
  segments: 30,
  samples: 3,
  precision: 2
});

gp.render({
  type: 'path',
  fill: [
    { color: '#C6FFDD', pos: 0 },
    { color: '#FBD786', pos: 0.25 },
    { color: '#F7797D', pos: 0.5 },
    { color: '#6DD5ED', pos: 0.75 },
    { color: '#C6FFDD', pos: 1 }
  ],
  width: 10
});