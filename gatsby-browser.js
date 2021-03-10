import React from "react"
import CartProvider from "./src/Components/CartProvider"

export const wrapRootElement = ({ element }) => {
    return (
        <CartProvider>
            { element }
        </CartProvider>
    )
  } 