import React, { useState }from "react"
import { ANavBar } from '../components/ArtNavBar'
import { ProductCard } from '../components/ProductCard'
import { CartBtn } from '../components/CartBtn'
import '../styles/a_shop.css';
// import Backdrop from '@mui/material/Backdrop'

export function AShopPage() {

  return (
    <>
      <ANavBar />
      <div className="productsContainer" >
        <ProductCard>
          {/* <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={open} onClick={handleClose}>
          </Backdrop> */}
        </ProductCard>
        <CartBtn />
      </div>
    </>
  )
}