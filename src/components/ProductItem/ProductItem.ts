import { appComponents } from "../../Interfaces/appComponents";
import { Product } from "../../Interfaces/Product";
import './ProductItem.css'

export let cart: String[] = []
const productCounter = document.querySelector('.productCounter')
const stockMinus = document.querySelector('.stockMinus')



const total = document.querySelector('.total')

let amount = 0

export class ProductItem implements appComponents{

constructor(private product:Product){

}

getId = () => `${this.product.id}`
getIds = () => `aaa`



render() {
    return `
      <div class="card" style="width: 18rem; margin: 1em;">
        <img src="${this.product.image}" alt="${this.product.name}" class="card-img-top" style="backgroung-size: auto;"/>
        <div class="card-body">
          <h5 class="card-title">${this.product.name}</h5>
          <p class="card-text">${this.product.price}</p>
            <a href="#" class="btn_add btn btn-primary" id=${this.getId()}>BUY</a>
        </div>
      </div>
    `;
  }

addEvents() {
    const buttonItem = document.getElementById(this.getId())!
    if(buttonItem == null && location.hash !== '#cart'){
      throw new Error("!!!");
    } else if(location.hash !== '#cart'){
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
            cart.push(`<div class="${this.product.id} card mb-3" style="max-width: 540px; display: flex;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${this.product.image}" class="img-fluid rounded-start" style="max-width: 3rem;" alt="${this.product.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${this.product.name}</h5>
                  <h6 class="card-title">$${this.product.price}</h6>
                  <h6 class="card-title">${this.product.stock}</h6>
                  <div class='stock'>
                  <button id='${this.getIds()}' onclick="
                  const stockCounter = document.getElementById('${'stockCounter'+this.getId()}')
                  const total = document.querySelector('.total')
                  const productCounter = document.querySelector('.productCounter')
                  if(stockCounter.innerHTML < ${this.product.stock}){
                   stockCounter.innerHTML++
                   total.innerHTML= total.innerHTML -0 + ${this.product.price}
                   productCounter.innerHTML++
                  }
                     
                
                  
                  ">+</button>
                  <div id='${'stockCounter'+this.getId()}'>1</div>
                  <button id='${stockMinus+this.getId()}'
                  onclick="
                  const stockCounter = document.getElementById('${'stockCounter'+this.getId()}')
                  const total = document.querySelector('.total')
                  const productCounter = document.querySelector('.productCounter')
                  if(stockCounter.innerHTML > 1){
                   stockCounter.innerHTML--
                   total.innerHTML -= ${this.product.price}
                   productCounter.innerHTML--
                   
                  } else {
                    stockCounter.innerHTML--
                   total.innerHTML -= ${this.product.price}
                   productCounter.innerHTML--
                    let element = document.querySelector('${'.'+this.product.id}')
                    element.style.display = 'none'
                   
                  }">-</button>
                  </div>
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

}
}



