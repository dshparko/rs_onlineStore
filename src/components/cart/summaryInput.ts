import { cart } from "../ProductItem";

function addPromo(){
  const summaryPromo = document.querySelector('.summaryPromo') as HTMLInputElement
const promoWrapper = document.querySelector('.promoWrapper') as HTMLElement
const summaryTotal = document.querySelector('.summaryTotal') as HTMLElement
const summaryPromoTotal = document.querySelector('.summaryPromoTotal') as HTMLElement
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
  }
}, 100);