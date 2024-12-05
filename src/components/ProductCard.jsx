import React from "react"

export function ProductCard() {
    return (
      <>
        <div className="productCard">
            <div className="productContent">
                <div className="productImgPlaceholder"></div>
                <div className="productInfo">
                    <h4 className="productName">Name</h4>
                    <p className="productPrice">X Kr</p>
                </div>
            </div>
        </div>
      </>
    )
  }