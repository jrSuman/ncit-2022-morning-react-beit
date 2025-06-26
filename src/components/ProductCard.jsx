const ProductCard = (props) => {
  // console.log("props", props)
  const {data} = props;
  // console.log('data', data)
  return (
    <div className="hover:shadow w-full">
      {/* product image */}
      <div className="w-full aspect-square bg-red-50">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* product title and other details */}
      <div className="grid p-2">
        <span className="text-lg font-medium text-gray-800">{data.name}</span>
        <span className="text-xl text-blue-500 font-semibold">${data.price}</span>

        <div className="space-x-2">
          <span className="line-through text-gray-400">${data.original_price}</span>
          <span className="text-gray-600">-{data.discount}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
