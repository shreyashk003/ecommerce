import axios from 'axios'
import React, { useState } from 'react'

function Product() {

  const [allProducts, setAllProducts] = useState([])

  axios.get("http://localhost:9000/api/getAllProducts")
  .then(response=>{
    setAllProducts(response)
  })

  return (
    <div>
      <h1>hello</h1>
      {allProducts.map(Product=><li>
      {Product.pid}-{Product.pname}</li>
        )}
    </div>
  )
}

export default Product