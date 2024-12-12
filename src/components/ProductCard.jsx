import React from "react"

export function ProductCard() {
  const nameArray = ['Name1','Name2','Name3','Name4','Name5','Name6','Name7','Name8','Name9','Name10']

  return (
    <>
      {nameArray.map((name) => {
        return (
          <button className="productCard">
            <div className="productContent">
              <div className="productImgPlaceholder"></div>
                <div className="productInfo">
                  <h4 className="productName">{name}</h4>
                  <p className="productPrice">0000 kr</p>
                </div>
            </div>
          </button>
        )
      })}
    </>
  )
}