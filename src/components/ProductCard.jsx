import React from "react"
import Backdrop from '@mui/material/Backdrop';
// import ProductViewModal from './ProductViewModal';

export function ProductCard() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

    return (
      <>
        <button className="productCard" onClick={handleOpen}>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={open} onClick={handleClose}>
        </Backdrop>
            <div className="productContent">
                <div className="productImgPlaceholder"></div>
                <div className="productInfo">
                    <h4 className="productName">Name</h4>
                    <p className="productPrice">X Kr</p>
                </div>
            </div>
        </button>
      </>
    )
  }