'use client'

function PriceButton({price}) {
  return (
    <div>
        <button onClick={()=>alert(price)}>Show Price</button>
    </div>
  )
}

export default PriceButton