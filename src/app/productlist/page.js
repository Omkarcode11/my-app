'use client'
import React, { useEffect, useState } from 'react'

export default function page() {

    let [products,setProducts] = useState([])

    useEffect(()=>{
      getData(setProducts)
    },[])

  return (
    <div>
        <h1>Product List</h1>
        <ol>
          {products.map(ele=><li >{ele.title}</li>)}
        </ol>
    </div>
  )
}


async function getData(setProduct){
    let data =  await fetch('https://dummyjson.com/products')
    data = await data.json()
    setProduct(data.products)


}