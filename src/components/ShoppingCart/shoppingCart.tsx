import React, { useEffect, useState } from 'react';
import './shoppingCart.scss'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IProduct } from '../../types/shopTypes';
import './shoppingCart.scss'
import { IStateItemExtended, REMOVE_PRODUCT_FROM_SHOPPING_CART } from '../../store/reducers/productsReducer';

const ShoppingCart: React.FC = () => {

      const state = useSelector((state: IProduct[]) => state)
      const dispatch = useDispatch()

      const [countProducts, setCountProducts] = useState(() => Array.from({ length: state.length }, () => 1))
      const [total, setTotal] = useState(() => state.reduce((sum, product) => sum + product.price, 0))

      useEffect(() => {
            setTotal(() => state.reduce((sum, product, index) => sum + (product.price * countProducts[index]), 0))
      }, [countProducts])
      
      if(Number.isNaN(total)){
            setTotal(0)
      }

      const deleteProduct = (item: IProduct, key: number) => {
            localStorage.setItem('products', JSON.stringify(state.filter((prod) => (prod as unknown as IStateItemExtended)._id !== item._id)))
            dispatch({ type: REMOVE_PRODUCT_FROM_SHOPPING_CART, payload: item._id })
            setCountProducts(prev => {
                  return prev.filter((_, i) => i !== key);;
            })
      }

      return (
            <div className='shop-cart'>
                  <div className="shop-cart__title">Shopping Cart</div>
                  <ul className="shop-cart__list list">
                        {state.map((item, key) => {
                              return (
                                    <li key={key} className="list__item item">
                                          <img src={item.img || 'http://localhost:5000/product.png'} alt={item.name} className="item__img" />
                                          <p className="item__title">{item.name}</p>
                                          <span className="item__price">{Number.isNaN(countProducts[key]) ? item.price : item.price * countProducts[key]} грн</span>
                                          <input max={20} min={1} type="number" className="item__count" value={countProducts[key]} onChange={e => setCountProducts(prevCountProducts => {
                                                const updatedCountProducts = [...prevCountProducts];
                                                updatedCountProducts[key] = parseInt(e.target.value) | 1;
                                                return updatedCountProducts;
                                          })} />
                                          <button onClick={() => deleteProduct(item, key)} className="item__delete">&#10006;</button>
                                    </li>
                              );
                        })}
                  </ul>
                  <div className="shop-cart__total total">
                        <p className="total__text">Total: </p>
                        <span className="total__sum">{total} грн</span>
                  </div>
            </div>
      );
};

export default ShoppingCart;