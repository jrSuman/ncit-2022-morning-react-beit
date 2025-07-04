import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from "./pages/ProductDetailPage";


const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/products/:productId",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
