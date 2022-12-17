import { BehaviorSubject } from "rxjs";

export class Store{
    static isExits = false;
    static instance: Store;

    public $render:BehaviorSubject<boolean> = new BehaviorSubject(true);
    

    constructor(){
        if(Store.isExits){
            return Store.instance;
        }

        Store.isExits = true;
        Store.instance = this;
    }
}

export const store = new Store();