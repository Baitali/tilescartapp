import React from 'react'
import styles from '../CssClasses/FormStyles.module.css';
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom'

export default function ShoppingCart({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  const navigate = useNavigate()

    

  return (
    <section className={styles.cart}>
    <h1>Cart</h1>
      <h3>{itemId}</h3>
      <h3>{otherParam}</h3>
    {/* <div className={classes.container}>
      {getProducts().map(product => (
        <div className={classes.product} key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <Quantifier
            removeProductCallback={() => handleRemoveProduct(product.id)}
            productId={product.id}
            handleUpdateQuantity={handleUpdateQuantity} />
        </div>
      ))}
    </div> */}
    {/* <TotalPrice amount={totalPrice} /> */}
  </section>
  )
}
