import { appComponents } from "../../Interfaces/appComponents";
import { Product } from "../../Interfaces/Product";
// import { cartModel } from "../../Models/CartModel";
import './ProductItem.css'

export let cart: String[] = []

export let info: String[] = []
const productCounter = document.querySelector('.productCounter')
const total = document.querySelector('.total')
let amount = 0
export class ProductItem implements appComponents{

constructor(private product:Product){

}

getId = () => `${this.product.id}`

render() {
    return `
      <div class="card" style="width: 18rem; margin: 1em;">
        <img src="${this.product.image}" alt="${this.product.name}" class="card-img-top" style="backgroung-size: auto;"/>
        <div class="card-body">
          <h5 class="card-title">${this.product.name}</h5>
          <ul class="product__features">
                <li class="product__property">Производитель: <span>${this.product.brand}</span></li>
                <li class="product__property">Категория: <span>${this.product.category}</span></li>
              </ul>
          <p class="card-text">${this.product.price}</p>
            <a href="#" class="btn_add btn btn-primary" id=${this.getId()}>BUY</a>
            <a href='#/info/${this.getId()}' class="btn_info btn btn-primary" id='info/${this.getId()}'>info</a>
        
        </div>
      </div>
    `;
  }

addEvents() {

  const buttonInfo = document.getElementById(`info/${this.getId()}`);

  if(buttonInfo == null){
      throw new Error("ERROR!");
    } 
    else{
      buttonInfo.addEventListener('click', () => {
       {
        info.push(`<div class="${this.product.name} card mb-3" style="max-width: 540px; display: flex;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${this.product.image}" class="img-fluid rounded-start" style="max-width: 3rem;" alt="${this.product.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${this.product.name}</h5>
                  <h6 class="card-title">$${this.product.price}</h6>
                  <ul class="product__features">
                <li class="product__property">Производитель: <span>${this.product.brand}</span></li>
                <li class="product__property">Категория: <span>${this.product.category}</span></li>
              </ul>
                </div>
              </div>
            </div>
          </div>
        `)
        }
      })
    }

    const buttonItem = document.getElementById(this.getId())
    if(buttonItem == null){
      throw new Error("!!!");
    } else{
      buttonItem.addEventListener('click', () => {
        if(buttonItem.classList.contains('btn_delete')){
          buttonItem.classList.remove('btn_delete')
          buttonItem!.innerHTML = 'BUY'
          cart = cart.filter(product => !product.match(this.product.image))
          productCounter!.innerHTML = String(cart.length)
            amount -= this.product.price
            total!.innerHTML = String(amount)
        }else{
          buttonItem.classList.add('btn_delete')
            buttonItem!.innerHTML = 'DROP FROM CART'
            cart.push(`<div class="${this.product.name} card mb-3" style="max-width: 540px; display: flex;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${this.product.image}" class="img-fluid rounded-start" style="max-width: 3rem;" alt="${this.product.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${this.product.name}</h5>
                  <h6 class="card-title">$${this.product.price}</h6>
                </div>
              </div>
            </div>
          </div>
        `)
            productCounter!.innerHTML = String(cart.length)
            amount += this.product.price
            total!.innerHTML = String(amount)
        }
      })
    }
    };
}