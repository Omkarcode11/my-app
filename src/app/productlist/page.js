'use client'
import React, { useEffect, useState } from 'react'
import style from './product.module.css'

export default function page() {
    let [toggle,setToggle] = useState(false)
    let [products,setProducts] = useState([])

    useEffect(()=>{
      getData(setProducts)
    },[])

  return (
    <div>
        <h1>Product List</h1>
        <ol>
          {products.map(ele=><li className={toggle?style.green:style.red}>{ele.title}</li>)}
          <button onClick={()=>setToggle(!toggle)}>Change color</button>
        </ol>
    </div>
  )
}


async function getData(setProduct){
    let data =  await fetch('https://dummyjson.com/products')
    data = await data.json()
    setProduct(data.products)


}