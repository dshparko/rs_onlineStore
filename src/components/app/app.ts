import { brand } from '../HTML/Filter/Brand/brand';
import { productInfo } from '../HTML/ProductInfo/productInfo';
import { category } from '../HTML/Filter/Category/category';
import { filterButtons } from '../HTML/Filter/FilterButtons/filterButtons';
import { price } from '../HTML/Filter/Price/price';
import { stock } from '../HTML/Filter/Stock/stock';
import { filterPanel } from '../HTML/Product/FilterPanel/filterPanel';
import './app.css';
import { ProductList } from '../ProductsList';
import { appComponents } from '../../Interfaces/appComponents';
import { cart } from '../ProductItem';


export class App implements appComponents{

  private productList = new ProductList();
 
  render() {
    if(location.hash == '#cart'){
      return `
      <div class='cart'>
      <div class='cartProduct'>${cart.join('')}</div>

      </div>
     `
  
    }if(location.hash == `#/info/product_1`){
      return `
      ${productInfo}
     `
  
    }  if(location.hash == '') {
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
    
    </div>`
  } else{
    return `
    <h1>NOT FOUND 404</h1>
   `
  }
  }
  addEvents(){
    this.productList.addEvents()
  }

}