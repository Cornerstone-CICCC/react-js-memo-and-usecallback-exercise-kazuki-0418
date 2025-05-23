import { useState } from 'react'
import Profile from './Profile'
import ProductList from './ProductList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>React memo and useCallback Demo</h1>
      
      <div className="counter-section">
        <h2>Counter Section</h2>
        <p>Count: {count}</p>
        <button 
          type='button'
        onClick={incrementCount}>
          Increment Count
        </button>
      </div>

      <div className="profile-section">
        <h2>Profile Section (memo demo)</h2>
        <Profile firstname="John" lastname="Doe" />
      </div>

      <div className="products-section">
        <h2>Products Section (useCallback demo)</h2>
        <ProductList />
      </div>
    </div>
  )
}

export default App