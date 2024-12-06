import React from "react"
import { ProductCard } from '../components/ProductCard';
import { CaretLeftFill } from "grommet-icons";
import { CaretRightFill } from "grommet-icons";
import '../styles/a-shop.css'

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