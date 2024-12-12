import React from "react"
import { Cart } from 'grommet-icons'

export function CartBtn() {
    return (
      <>
        <button className="cartBtn">
            <Cart size="medium" color="white"/>
        </button>
      </>
    )
  }
