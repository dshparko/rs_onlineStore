export * from '../src/'
import './global.css';

import {App} from './components/app';
import { store } from './Store/Store';

const main = document.querySelector('.main');

if (!main) {
  throw new Error('The main is undefined!');
}

const app = new App ();

main.innerHTML = app.render();

store.$state.subscribe(()=>{
  main.innerHTML = app.render();
  app.addEvents()
});

window.addEventListener('hashchange', ()=>{
  main.innerHTML = app.render();
  app.addEvents()
})