import { IProduct, IShop } from '../../types/shopTypes';

interface IStateItem {
      id: number,
      product: IProduct,
      whereProduct: string
}

const productsJSON = localStorage.getItem("products");

const initialState: IStateItem[] = productsJSON ? JSON.parse(productsJSON) : []

export const ADD_PRODUCT_TO_SHOPPING_CART = 'ADD_PRODUCT_TO_SHOPPING_CART'
export const REMOVE_PRODUCT_FROM_SHOPPING_CART = 'REMOVE_PRODUCT_FROM_SHOPPING_CART'
export const REMOVE_ALL_PRODUCTS_FROM_SHOPPING_CART = 'REMOVE_ALL_PRODUCTS_FROM_SHOPPING_CART'
export const ADD_INIT_PRODUCT_TO_SHOPPING_CART = 'ADD_INIT_PRODUCT_TO_SHOPPING_CART'

enum ActioType {
      ADD_PRODUCT_TO_SHOPPING_CART = 'ADD_PRODUCT_TO_SHOPPING_CART',
      REMOVE_ALL_PRODUCTS_FROM_SHOPPING_CART = 'REMOVE_ALL_PRODUCTS_FROM_SHOPPING_CART',
      REMOVE_PRODUCT_FROM_SHOPPING_CART = 'REMOVE_PRODUCT_FROM_SHOPPING_CART',
      ADD_INIT_PRODUCT_TO_SHOPPING_CART = 'ADD_INIT_PRODUCT_TO_SHOPPING_CART'
}

interface IActioTypeAdd {
      type: ActioType.ADD_PRODUCT_TO_SHOPPING_CART,
      payload: IStateItem
}

interface IActioTypeAddInit {
      type: ActioType.ADD_INIT_PRODUCT_TO_SHOPPING_CART,
      payload: IStateItem[]
}

interface IActioTypeRemoveOne {
      type: ActioType.REMOVE_PRODUCT_FROM_SHOPPING_CART,
      payload: string
}

interface IActioTypeRemoveAll {
      type: ActioType.REMOVE_ALL_PRODUCTS_FROM_SHOPPING_CART
}

export interface IStateItemExtended extends IStateItem {
      _id: string;
}

export const productReducer = (state = initialState, action: IActioTypeAdd | IActioTypeRemoveOne | IActioTypeRemoveAll | IActioTypeAddInit): IStateItem[] => {
      switch (action.type) {
            case ADD_PRODUCT_TO_SHOPPING_CART:
                  return [...state, action.payload]
            case ADD_INIT_PRODUCT_TO_SHOPPING_CART:
                  return [...state, ...action.payload]
            case REMOVE_PRODUCT_FROM_SHOPPING_CART:
                  return state.filter((item) => (item as IStateItemExtended)._id !== action.payload);
            case REMOVE_ALL_PRODUCTS_FROM_SHOPPING_CART:
                  return []
            default: return state
      }
} 