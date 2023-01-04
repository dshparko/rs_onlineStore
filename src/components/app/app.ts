import { brand } from "../HTML/Filter/Brand/brand";
import { category } from "../HTML/Filter/Category/category";
import { filterButtons } from "../HTML/Filter/FilterButtons/filterButtons";
import { price } from "../HTML/Filter/Price/price";
import { stock } from "../HTML/Filter/Stock/stock";
import { filterPanel } from "../HTML/Product/FilterPanel/filterPanel";
import "./app.css";
import { ProductList } from "../ProductsList";
import { appComponents } from "../../Interfaces/appComponents";
import { cart, productCounter, total } from "../ProductItem";

export class App implements appComponents {
  private productList = new ProductList();

  render() {
    if (location.hash == "#cart") {
      if (cart.length == 0) {
        return `<div>Cart is Empty</div>`;
      } else {
        return `
      <div class='cart'>
      <div class='cartProduct'>${cart.join("")}</div>
<div class='summary'>
<p class='summaryTitel'>Summary</p>
<p class='summaruProducts'>${productCounter?.innerHTML}</p>
<p class='summaryTotal'>${total?.innerHTML}</p>
<p class='summaryPromoTotal'>${Number(total?.innerHTML) * 1 / 100}</p>
<input class='summaryPromo' type="text" placeholder='Enter promo code' value=''>
<div class ='promoWrapper'>
<p>haluava - 99%</p>
<button class='promoButton'>ADD</button>
</div>
<p>Promo for test: 'haluava'</p>
<button>BUY NOW</button>
</div>
      </div>
     `;
      }
    } else {
      return `
  
    <div class='filterWrapper'>
      ${filterButtons}
      ${category}
      ${brand}
      ${price}
      ${stock}
    </div>
    <div class ='productWrapper'>
    ${filterPanel}

    ${this.productList.render()}
    
    </div>`;
    }
  }
  addEvents() {
    this.productList.addEvents();
  }
}




setInterval(() => {
  const summaryPromo = document.querySelector('.summaryPromo') as HTMLInputElement
const promoWrapper = document.querySelector('.promoWrapper') as HTMLElement
const summaryTotal = document.querySelector('.summaryTotal') as HTMLElement
const summaryPromoTotal = document.querySelector('.summaryPromoTotal') as HTMLElement

  if(location.hash == "#cart" && summaryPromo.value == 'haluava' && cart.length !== 0){
    promoWrapper.style.display = 'flex'
    const promoButton = document.querySelector('.promoButton') as HTMLButtonElement
    promoButton?.addEventListener('click', () => {
      if(promoButton.innerHTML == 'ADD'){
        promoButton.innerHTML = 'DROP'
        summaryTotal.style.textDecoration = 'line-through'
        summaryPromoTotal.style.display = 'flex'
      } else{
        promoButton.innerHTML = 'ADD'
        summaryTotal.style.textDecoration = 'none'
        summaryPromoTotal.style.display = 'none'
      }
      
    })
  }
  else if (location.hash == "#cart" && summaryPromo.value !== 'haluava' && cart.length !== 0) {
    promoWrapper.style.display = 'none'
    summaryTotal.style.textDecoration = 'none'
        summaryPromoTotal.style.display = 'none'
  }
}, 50);
