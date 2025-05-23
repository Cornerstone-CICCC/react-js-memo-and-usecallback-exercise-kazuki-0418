import { memo } from 'react'

interface GetProductsButtonProps {
  onFetchProducts: () => void
}

const GetProductsButton = memo(({ onFetchProducts }: GetProductsButtonProps) => {
  console.log("Rendered Button Component")
  
  return (
    <button 
        type='button'
    onClick={onFetchProducts} className="fetch-button">
      Fetch Products
    </button>
  )
})

GetProductsButton.displayName = 'GetProductsButton'

export default GetProductsButton