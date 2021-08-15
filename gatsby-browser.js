import React from 'react'
import { GlobalStyle } from './src/components/globalStyles'
import { CartContextProvider } from './src/context/CartContext'
import { ProductContextProvider } from './src/context/ProductContext'

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>{element}</CartContextProvider>
  </ProductContextProvider>
)

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
