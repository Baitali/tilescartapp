import React, { useState } from 'react'
import logo from '../logo.svg';
import tiles1 from '../tiles1.svg';
import styles from '../CssClasses/CatalogueStyles.module.css';
import CatalogueHeader from './CatalogueHeader';

export default function ProductCatalog() {


      const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
//   const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})
    const [cart, setCart] = useState({});
    const [prodCount, setProdCount] = useState(0);
    const [prodQuantity, setProdQuantity] = useState(0);

    const tilesSample = [
        { id: 1, name: 'Amo Brown', price: 60 , size: '600x600 mm ft', quantity:0},
        { id: 2, name: 'Cibola Wood', price: 25 , size: '1200x600 mm ft', quantity:0},
        { id: 3, name: 'Ecowood Multi', price: 45 , size: '450x300 mm ft', quantity:0},
        { id: 4, name: 'Garden Green', price: 50 , size: '300x300 mm ft', quantity:0},
        { id: 5, name: 'Mosaic Art', price: 70 , size: '300x600 mm ft', quantity:0},
        { id: 6, name: 'Outdoor Tile', price: 80 , size: '300x600 mm ft', quantity:0},
    ];

    const addToCart = (product) => {
        product.quantity = product.quantity+1;
        setProdQuantity(product.quantity);
        setCart((prevCart) => ({
          ...prevCart,
          [product.id]: product,
        }));
        setProdCount(prodCount+1);
    };

    const removeFromCart = (product) => {
        product.quantity = product.quantity-1;
        setProdQuantity(product.quantity);
        //setCart(cart.filter(item => item.id !== product.id));
        setProdCount(prodCount-1);
    };
    

  return (
    <>
    <CatalogueHeader products={cart.product}> </CatalogueHeader>
    <div className={styles.container}>
        <h3>List of Tiles</h3>
        

        
        {tilesSample.map(product => (
          <div className={styles.product} key={product.id}>
            <img src={logo} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price} </p>
            <button className={styles.addToCartBtn} onClick={() => removeFromCart(product)}>-</button> {prodQuantity} 
             &nbsp;<button className={styles.addToCartBtn} onClick={() => addToCart(product)}>+</button>
            
          </div>
        ))}
      </div>

        </>
    
  )
}
