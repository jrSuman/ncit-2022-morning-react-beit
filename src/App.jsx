import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RootLayout from "./RootLayout";
import { CartContext } from "./CartContext";
import { useState } from "react";
import ProductsPageTwo from "./pages/ProductsPageTwo";
// import RootLayout from "./RootLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/products",
//     element: <ProductsPage />,
//   },
//   {
//     path: "/products/:productId",
//     element: <ProductDetailPage />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
        {
        path: "/products2",
        element: <ProductsPageTwo />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

function App() {
  const [cartItem, setCartItem] = useState([{
    id:1,
    name: "Adidas Sinkers"
  }])

  const addToCart = (item) => {
    setCartItem([...cartItem, item])
  }
  return (
    // <RootLayout/>
    <CartContext.Provider value={{cartItem, addToCart}}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
