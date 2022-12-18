import { appComponents } from "../../Interfaces/appComponents";
import { Product } from "../../Interfaces/Product";
import './ProductItem.css'

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
          <p class="card-text">${this.product.price}</p>
            <a href="#" class="btn_add btn btn-primary" id=${this.getId()}>BUY</a>
        </div>
      </div>
    `;
  }

addEvents() {
    const buttonItems = document.getElementById(this.getId())
    if(buttonItems == null){
      throw new Error("!!!");
      
    } else{
      buttonItems.addEventListener('click', () => {
        console.log(buttonItems)
      })
    }
    };
}