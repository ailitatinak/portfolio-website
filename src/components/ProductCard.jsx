import React from "react"
import Backdrop from '@mui/material/Backdrop';
//import { ProductViewModal } from './ProductViewModal';
import { namesState } from './ArtworkData'
import { useRecoilState } from "recoil"

export function ProductCard() {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {setOpen(false)}
  const handleOpen = () => {setOpen(true)}
  const [names, setNames] = useRecoilState(namesState)

  if (!names) {
    return <span>Loading...</span>
  }
  names.map((name) => {
    return (
      <>
        <button className="productCard" onClick={handleOpen}>
          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={open} onClick={handleClose}>
          </Backdrop>
          <div className="productContent">
            <div className="productImgPlaceholder"></div>
              <div className="productInfo">
                <h4 className="productName">{name}</h4>
                <p className="productPrice">0000 kr</p>
              </div>
          </div>
        </button> 
      </>
    )
  })
}
