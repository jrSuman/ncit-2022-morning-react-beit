import { Link } from "react-router";

const ProductCard = (props) => {
  // console.log("props", props)
  const {data} = props;

  return (
    <Link to={`/products/${data.id}`}>
      <div className="hover:shadow w-full">
        {/* product image */}
        <div className="w-full aspect-square bg-red-50">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* product title and other details */}
        <div className="grid p-2">
          <span className="text-lg font-medium text-gray-800">{data.title}</span>
          <span className="text-xl text-blue-500 font-semibold">${data.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
