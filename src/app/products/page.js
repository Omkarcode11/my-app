export default async function Products() {
  let data = await getData();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((ele)=><li key={ele.id}>Name : {ele.title}</li>)}
      </ul>
    </div>
  );
}

async function getData() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products
}


