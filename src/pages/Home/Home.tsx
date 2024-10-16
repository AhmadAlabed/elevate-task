import { ChangeEvent, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/products";
import { type IProduct } from "../../types";
import Select from "../../components/ui/Select/Select";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { LoadingContext } from "../../contexts/LoadingContext";
import { toast } from "react-toastify";
interface ICustomError extends Error {
  message: string;
}

interface IControls {
  sort: "asc" | "desc";
  limit: number;
}
const Home = () => {
  // -------------State-------------
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  const [controls, setControls] = useState<IControls>({
    sort: "asc",
    limit: 5,
  });
  const { setIsLoading } = useContext(LoadingContext);
  const getProductsFunc = async (limit: number, sort: "asc" | "desc") => {
    try {
      setIsLoading(true);
      const response = await getProducts(limit, sort);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const customError = error as ICustomError;
      toast.error(customError.message);
    }
  };
  // ---------Event Handler---------
  const changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void = function (
    e
  ) {
    const { value, name } = e.target;
    setControls({
      ...controls,
      [name]: value,
    });
  };
  // -------------Static Data-------------
  const limitOptions = [
    {
      value: "5",
      text: "- 5 ",
    },
    {
      value: "10",
      text: "- 10 ",
    },
    {
      value: "20",
      text: "- 20 ",
    },
  ];
  const sortOptions = [
    {
      value: "asc",
      text: "Ascending",
    },
    {
      value: "desc",
      text: "descending",
    },
  ];
  // -------------Render-------------
  const renderProducts = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProductsFunc(controls.limit, controls.sort);
  }, [controls]);
  return (
    <>
      <div className="flex justify-center py-4 mb-12">
        <Breadcrumb items={[{ state: "disabled", text: "Home", to: "/" }]} />
      </div>

      <div className="mb-12 flex gap-2">
        <Select
          id="limit"
          label="Limit: "
          name="limit"
          options={limitOptions}
          onChange={(e) => {
            changeHandler(e);
          }}
          value={controls.limit}
        />
        <Select
          id="sort"
          label="Sort: "
          name="sort"
          options={sortOptions}
          onChange={(e) => {
            changeHandler(e);
          }}
          value={controls.sort}
        />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
        {renderProducts}
      </div>
    </>
  );
};

export default Home;
