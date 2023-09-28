import React from 'react'
import ShoppingCart from './ShoppingCart'
import styles from '../CssClasses/CatalogueStyles.module.css'
import logo from '../logo.svg';
import CartWidget from './CartWidget';
import {Link, Outlet} from 'react-router-dom';
import ProductCatalog from './ProductCatalog';

export default function CatalogueHeader(props) {
  return (
    <>
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="Tiles Cart Application" />
        </Link>
      </div>
        <CartWidget productsCount={props.productsCount} />
    </header>
    </>
  )
}
