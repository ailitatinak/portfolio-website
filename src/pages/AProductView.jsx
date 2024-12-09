import React from "react"
import { ProductCard } from '../components/ProductCard';
import { CaretLeftFill } from "grommet-icons";
import { CaretRightFill } from "grommet-icons";
import '../styles/a-shop.css'

//Open product view on top of blacked out background
//Back and forth in product view

export function ProductView() {
  return (
    <>
      <div className="productViewContainer">
        <CaretLeftFill />
        <CaretRightFill />
      </div>
    </>
  )
}