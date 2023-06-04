import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dbStore from '../../dbStore/dbStore';
import { IProduct } from '../../types/shopTypes';
import './products.scss'
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT_TO_SHOPPING_CART } from '../../store/reducers/productsReducer';
import ModalToShopingCart from '../ModalToShopingCart/modalToShopingCart';
import { useSelector } from 'react-redux';
import { store } from '../../store';


const Products: React.FC = () => {
      const { shopId } = useParams();
      const [errors, setErrors] = useState('')
      const [products, setProducts] = useState<IProduct[]>([])
      const [isLoading, setIsLoading] = useState(true)
      const [isModalToShopingCart, setIsModalToShopingCart] = useState(false)
      const [modalText, setModalText] = useState('')

      const state = useSelector((state: IProduct[]) => state)
      const dispatch = useDispatch()

      const getAllProducts = async () => {
            if (typeof shopId === 'string') {
                  try {
                        await dbStore.getProducts(shopId)
                              .then(res => {
                                    setProducts(res)
                                    setIsLoading(false)
                              })
                  } catch (error) {
                        console.log(error)
                  }

            }
      }
      
      useEffect(() => {
            getAllProducts()
      }, [])

      const addProduct = (item: IProduct) => {
            setIsModalToShopingCart(true);
            if(state.find((prod) => prod._id === item._id) === undefined){
                  localStorage.setItem('products', JSON.stringify([...state, item]))
                  dispatch({ type: ADD_PRODUCT_TO_SHOPPING_CART, payload: item })
                  setModalText('Продукт додано до кошика')
            }else{
                  setModalText('Ви вже додали цей продукт до кошика, на вкладці Shopping Cart ви можете змінити кількість')
            }
      }
      
      useEffect(() => {
            if (isModalToShopingCart) {
                  const timer = setTimeout(() => {
                        setIsModalToShopingCart(false);
                  }, 5000);

                  return () => {
                        clearTimeout(timer);
                  };
            }
      }, [isModalToShopingCart]);


      if (isLoading) {
            return (
                  <div className="spinner">
                        <span className="spinner-inner-1"></span>
                        <span className="spinner-inner-2"></span>
                        <span className="spinner-inner-3"></span>
                  </div>
            )
      }

      if (products.length === 0) {
            return <h1 style={{ color: 'red', textAlign: 'center', paddingTop: 50 }}>This shop does not exist or you made a mistake in the http address</h1>
      }
      
      return (
            <>
                  <ul className="product">
                        {products.map((item, key) => {
                              return (
                                    <li className="product__item item" key={key}>
                                          <img src={item.img || 'http://localhost:5000/product.png'} alt="" className="item__img" />
                                          <h3 className="item__name">{item.name}</h3>
                                          <p className="item__price">{item.price} грн</p>
                                          <button className="item__button" onClick={() => addProduct(item)}>Buy</button>
                                    </li>
                              );
                        })}
                  </ul>
                  {isModalToShopingCart && <ModalToShopingCart setShowModal={setIsModalToShopingCart} modalText={modalText} />}
            </>
      );
};

export default Products;