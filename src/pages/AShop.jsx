import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import { ProductCard } from '../components/ProductCard'
import { CartBtn } from '../components/CartBtn'
import { ProductView } from './AProductView'
import '../styles/a-shop.css';

//Show how many items are added to cart on cart button
//One card for every item in json

export function AShopPage() {
  return (
    <>
      <ANavBar />
      <div className="productsContainer" >
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <CartBtn />
      </div>
    </>
  )
}