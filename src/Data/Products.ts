import { Product } from '../Interfaces/Product';

const PRODUCTS: Product[] = [
  {
    favorite: false,
    id: 'product_1',
    image: 'https://i.pinimg.com/564x/f2/a9/81/f2a9814f1d301cd2fa73ef274ad91ca7.jpg',
    name: 'product 0',
    price: 1113,
  },

  {
    favorite: false,
    id: 'product_2',
    image: 'https://i.pinimg.com/736x/10/d1/a2/10d1a28f20bfa7ca3f724b61557c12ba.jpg',
    name: 'product 1',
    price: 2122,
  },

  {
    favorite: false,
    id: 'product_3',
    image: 'https://i.pinimg.com/564x/b6/e6/33/b6e633339c9c407fc7c0fa02e2452ae3.jpg',
    name: 'product 2',
    price: 311,
  },

  {
    favorite: true,
    id: 'product_4',
    image: 'https://i.pinimg.com/564x/42/9a/ba/429abaea7c81d6647f910f6ef349dee9.jpg',
    name: 'product 3',
    price: 399,
  },

  {
    favorite: false,
    id: 'product_5',
    image: 'https://i.pinimg.com/564x/19/1a/54/191a54af8e1b6fef0aafbbcdb06000b9.jpg',
    name: 'product 4',
    price: 599,
  },

  {
    favorite: false,
    id: 'product_5',
    image: 'https://i.pinimg.com/564x/e3/aa/99/e3aa99152428ad7bca8ffbe0e330803d.jpg',
    name: 'product 5',
    price: 1499,
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error('Something wend wrong'));
      } else {
        resolve(PRODUCTS);
      }
    }, 2000);
  });
};