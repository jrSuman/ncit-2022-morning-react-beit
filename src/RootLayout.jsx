import { useContext, useState } from "react";
import { Link, Outlet } from "react-router";
import { CartContext } from "./CartContext";

const RootLayout = () => {
    const cart = useContext(CartContext)
    const [isVisible, setIsVisible] = useState(false)
  return (
    // <span>Root Layout</span>
    <div className="">
      {/* nav bar */}
      <div className="flex bg-blue-500 justify-between p-4 text-white">
        {/* logo */}
        <span>logo</span>
        {/* menus */}
        <div>
          <ul  className="flex gap-4">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>About</li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>GAllery</li>
          </ul>
        </div>
        {/* carts */}
        <div className="relative">
          <button onClick={() => setIsVisible(!isVisible)}>
<span>Carts </span>
          <span className="bg-red-500 w-4 h-4" >{cart.cartItem.length}</span>
          </button>
          
          {isVisible && (
            <div className="absolute top-10 right-0 bg-white">
              <ul>
              {
                cart.cartItem.map(item => (
                  <li className="flex">
                    <img src={item.image} alt="" className="w-10 h-10" />
                    <span className="text-red-500">{item.title}</span>
                  </li>
                ))
              }
              </ul>
            </div>
          )
          }
        </div>
      </div>
      {/* content */}
      <div className="">
        {/* dynamic content */}
        <Outlet />
      </div>


      {/* footer */}
      <div className="bg-gray-800 flex justify-between">
         {/* logo */}
        <span>logo</span>
        {/* menus */}
        <div>
          <ul  className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>GAllery</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default RootLayout;
