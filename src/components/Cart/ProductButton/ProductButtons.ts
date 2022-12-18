const productCounter = document.querySelector('.productCounter')
const total = document.querySelector('.total')

let count = 0
let totalCount = 0
if(productCounter == null){
  throw new Error("!!!");
  
}

export function addEventButtons(){
  const buttonItems = document.querySelectorAll('a.btn_add')
  let productCounter = document.querySelector('.productCounter')
  const totalPrice = document.querySelectorAll('p.card-text')
  
  if(buttonItems.length == 0 && totalPrice.length == 0){
    setTimeout(function() {addEventButtons()}, 1000);
  } else{
    for (let buttonItem of buttonItems) {
      const indexButton = buttonItem.id.replace(/[^0-9]/gi, '')
      let indexButtonNumber = +indexButton-1
      let totalPriceNumber = +totalPrice[indexButtonNumber].innerHTML
      buttonItem.addEventListener('click', (e) => {
        if(buttonItem.classList.contains('btn_delete')){
          totalCount -= totalPriceNumber
          total!.innerHTML = `${totalCount}`
          count-= 1 
          buttonItem.classList.remove('btn_delete')
          productCounter!.innerHTML = `${count}`
          buttonItem!.innerHTML = 'BUY'
        }else{
          totalCount += totalPriceNumber
          total!.innerHTML = `${totalCount}`
          count+= 1 
          buttonItem.classList.add('btn_delete')
            productCounter!.innerHTML = `${count}`
            buttonItem!.innerHTML = 'DROP FROM CART'
        }
      });
    }
  }
  
}
