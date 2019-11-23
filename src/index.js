// require는 CommonJS 스펙의 모듈 가져오기
// var _ = require('lodash'); es5
import _ from 'lodash'; // es6
// named import 의 규칙 : {} 안에 동일한 이름을 명시
import {area} from './js/circle.js';
// default import : {}없고, 이름을 바꿀 수 있다.

import cube from './js/cube.js';

import './style.css';
import './hello.scss';
import {circumference} from "./js/circle";


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

console.log(area(3), circumference(5));
console.log(cube.volume(2));

document.body.appendChild(component());