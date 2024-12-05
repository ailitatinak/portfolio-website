import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import { ProductCard } from '../components/ProductCard'
import { CartBtn } from '../components/CartBtn'
import '../styles/a-shop.css';

export function AShopPage() {
  return (
    <>
      <ANavBar />
      <div className="productsContainer">
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