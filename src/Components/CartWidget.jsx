import React from 'react'
import styles from '../CssClasses/CatalogueStyles.module.css'
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom'

export default function CartWidget(props) {
    const navigate = useNavigate()

    const navigateToCart = () => {
      navigate('shoppingCart',  {
        itemId: 1,
        otherParam: props,
      });
    }

    const prodSize = props?.productsCount?.products || 0;
  return (
    <button className={styles.container} onClick={navigateToCart}>
      <span className={styles.productsCount}>{prodSize}</span>
      <img src={logo} className={styles.shoppingCart} alt="Go to Cart" />
    </button>
  )
}
