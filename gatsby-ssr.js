const React = require("react");
const CartProvider = require("./src/Components/CartProvider").deafault;

exports.wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
        {element}
    </CartProvider>
  )
}