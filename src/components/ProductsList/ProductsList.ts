import { Product } from "../../Interfaces/Product";
import { productModel } from "../../Models/ProductsModel";
import { store } from "../../Store/Store";
import { ProductItem } from "../ProductItem"

export class ProductList{

    private loading = false;
    private err : Error| null = null;
    private products:Product[]=[];
    constructor(){
        this.fetchProducts();
    }

    fetchProducts(){
        this.loading = true;
        productModel.getProducts()
        .then((products)=>{
            this.products=products;
        }).catch((err)=>{
            this.err = err;
        })
        .finally(()=>{
            store.$render.next(true);
        });
    }


    render(){
        return `<h2>ProductList</h2>
        ${this.products.map((product)=> new ProductItem(product))
            .map((product:ProductItem)=> product.render())
            .join("")}
            ${this.loading ? `<p>Loading</p>`:``}
            ${this.err ? `<p>${this.err.message}</p>`:``}

        `
    }
}