'use client'
import React from 'react'

function DashBoard({params}) {
    console.log(params)
  return (
    <div>
    <h2>DashBoard</h2>
    <ul>
        {params.context.length>0?params.context.map(ele=><li>{ele}</li>):<h3>No Context</h3>}
    </ul>
    </div>
    // {params.context.length>0?}

  )
}

export default DashBoard