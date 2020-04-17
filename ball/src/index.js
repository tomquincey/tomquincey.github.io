import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'img/map.svg',
  trailVisitedColor:'#A232FF',
  fontPresentColor:'#A232FF',
}).appendTo('.container')
