import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
