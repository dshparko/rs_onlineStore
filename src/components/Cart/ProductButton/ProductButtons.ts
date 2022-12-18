
let productCounter = document.querySelector('.productCounter')
let count = 0
let buyStatus = true
if(productCounter == null){
  throw new Error("!!!");
  
}

export function addEventButtons(){
  const buttonItems = document.querySelectorAll('a.btn_add')
  let productCounter = document.querySelector('.productCounter')
  
  if(buttonItems.length == 0){
    setTimeout(function() {addEventButtons()}, 1000);
  } else{
    for (let buttonItem of buttonItems) {
      buttonItem.addEventListener('click', (e) => {
        
        if(buttonItem.classList.contains('btn_delete')){
          count-= 1 
          buttonItem.classList.remove('btn_delete')
          productCounter!.innerHTML = `${count}`
          buttonItem!.innerHTML = 'BUY'
        }else{
          count+= 1 
          buttonItem.classList.add('btn_delete')
            productCounter!.innerHTML = `${count}`
            buttonItem!.innerHTML = 'DROP FROM CART'
        }
      });
    }
  }
  
}
