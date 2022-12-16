import { brand } from '../HTML/Filter/Brand/brand';
import { category } from '../HTML/Filter/Category/category';
import { filterButtons } from '../HTML/Filter/FilterButtons/filterButtons';
import { price } from '../HTML/Filter/Price/price';
import { stock } from '../HTML/Filter/Stock/stock';
import { filterPanel } from '../HTML/Product/FilterPanel/filterPanel';
import './app.css';

export class App {
  render() {
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
    </div>`
  }
}