import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  const fetchApi = () => {
    console.log("api call")
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
      setProducts(data)
    })
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="">
      <h1>ProductsPage</h1>
      <button 
      onClick={fetchApi}
      className="bg-blue-500 p-4">Fetch Product</button>
      <span>products length: {products.length}</span>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {
          products.map((item) => (
            <ProductCard data={item}/>
          ))
        }
      </div>
    </div>
  );
};

export default ProductsPage;
