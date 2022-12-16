export * from '../src/'
import './global.css';

import {App} from './components/app';

const main = document.querySelector('.main');

if (!main) {
  throw new Error('The main is undefined!');
}

const app = new App();

main.innerHTML = app.render();

console.log(app)