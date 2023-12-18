import PriceButton from "./PriceButton";

export default async function productLists() {
  let allProducts = await getData();
  console.log("========");

  return (
    <div>
      <h1>All Products</h1>
      <ol>
        {allProducts.map((ele) => (
          <li>
            <p>{ele.title}</p>
            
                <PriceButton price={ele.price}/>
            
          </li>
        ))}
      </ol>
    </div>
  );
}

async function getData() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
