import { useState, useCallback } from 'react'
import GetProductsButton from './GetProductsButton'

interface Product {
  id: number
  title: string
  price: number
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  // Using useCallback to memoize the function
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      setProducts(data.products.slice(0, 5)) // Only show first 5 products
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }, []) // Empty dependency array

  return (
    <div className="product-list">
      <GetProductsButton onFetchProducts={fetchProducts} />
      
      {products.length > 0 && (
        <div className="products">
          <h4>Products:</h4>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProductList