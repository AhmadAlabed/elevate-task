import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Spinner from "./components/Spinner/Spinner";
import { useContext, useEffect } from "react";
import { LoadingContext } from "./contexts/LoadingContext";
import { ToastContainer, Zoom } from "react-toastify";

function App() {
  const { isLoading } = useContext(LoadingContext);
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer
        autoClose={4000}
        hideProgressBar={true}
        transition={Zoom}
        toastStyle={{
          borderRadius: 0,
          boxShadow: "none",
          border: "1px solid rgba(128, 128, 128, 0.3)",
        }}
      />
      {isLoading ? <Spinner /> : ""}
    </>
  );
}

export default App;
