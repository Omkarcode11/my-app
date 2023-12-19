import styles from './products.module.css'


export default async function Products() {
  let data = await getData();



  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((ele)=><li key={ele.id} className={styles.product}>Name : <span className={'product'}>{ele.title}</span></li>)}
      </ul>
    </div>
  );
}

async function getData() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products
}


