import { useEffect, useState } from "react";
import { useParams } from "react-router"

const ProductDetailPage = () => {
  const params = useParams();
  const [productDetail, setProductDetail] = useState()  

  console.log("params", params)

   const fetchProductDetail = () => {
    console.log("api call")
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
      setProductDetail(data)
    })
  }

  useEffect(() => {
    fetchProductDetail()
  }, [])

  return(
    <div className="grid grid-cols-2">
      {/* image */}
      <div className="bg-red-500">
        <img src={productDetail?.image} alt="" />
      </div>
      {/* product detail */}
      <div className="bg-yellow-500 flex flex-col">
        <h2>{productDetail?.title}</h2>
        <span>${productDetail?.price}</span>
        <button className="bg-blue-500 text-white p-4">Add to cart</button>
        <span>Description</span>
        <p>{productDetail?.description}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage