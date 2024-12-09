import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import '../styles/a-checkout.css'

//Open cart view on top of blacked out background
  //Image of added item/items
  //Name of item + price
  //Total
  //Buy button
  //Payment options

//Remove item
//Minimize cart and keep data when opened again
//Update total amount
//Choose payment option

export function ACheckOutPage() {
  return (
    <>
      <ANavBar />
      <h1>This is the checkout!</h1>
    </>
  )
}