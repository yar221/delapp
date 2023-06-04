import React, { useState, useEffect } from 'react';
import './modalToShopingCart.scss';

type ModalToShopingCartProps = {
      setShowModal: (show: boolean) => void;
      modalText: string
};

const ModalToShopingCart: React.FC<ModalToShopingCartProps> = ({ setShowModal, modalText }) => {
      const [styles, setStyles] = useState({})

      useEffect(() => {
            if(modalText.length > 24){
                  // setStyles({flexDirection: 'column', justifyContent: 'center', width: 350})
            }else{
                  setStyles({})
            }
      }, [modalText])
      

      return (
            <div className="modal">
                  <div className="modal__content" style={styles}>
                        <h3 className="modal__title">{modalText}</h3>
                        <button className="modal__close" onClick={() => setShowModal(false)}>
                              Закрити
                        </button>
                  </div>
            </div>
      );
};

export default ModalToShopingCart;
