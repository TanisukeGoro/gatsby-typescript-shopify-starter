import React, { ReactNode } from 'react'

const defaultState = {
  products: [],
}

const ProductContext = React.createContext(defaultState)
export default ProductContext

interface ProductContextProviderProps {
  children: ReactNode
}

interface ProductContextInterface {
  products: ShopifyBuy.Product[]
  collections: ShopifyBuy.Collection[]
}

const productContext: ProductContextInterface = {
  products: [],
  collections: [],
}

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  )
}
