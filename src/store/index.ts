import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productsReducer";


export const store = createStore(productReducer, composeWithDevTools())