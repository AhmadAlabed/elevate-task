import { useContext, useEffect, useState } from "react";
import { starActive, starDisabled } from "../../assets/svg";
import { Link, useParams } from "react-router-dom";
import { type IProduct } from "../../types";
import { getOneProduct } from "../../services/products";
import Button from "../../components/ui/Button/Button";
import { LoadingContext } from "../../contexts/LoadingContext";
import { toast } from "react-toastify";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
interface ICustomError extends Error {
  message: string;
}
const ProductDetails = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { id } = useParams();
  // -------------State-------------
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const getOneProductFunc = async (id: number) => {
    try {
      setIsLoading(true);
      const response = await getOneProduct(id);
      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const customError = error as ICustomError;
      toast.error(customError.message);
    }
  };
  // -------------Render-------------
  const renderRate = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= product?.rating?.rate ? starActive : starDisabled);
    }
    return stars.map((star, index) => {
      return <img key={index} src={star} className="max-w-6" />;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getOneProductFunc(Number(id));
  }, []);
  return (
    <>
      <div className="flex justify-center py-4 mb-12">
        <Breadcrumb
          items={[
            { state: "enabled", text: "Home", to: "/" },
            { state: "disabled", text: "Product Details", to: "" },
          ]}
        />
      </div>
      <div className="border border-spacing-2 p-2 border-gray-300  mt-5">
        <div className="max-h-96 mb-2">
          <img
            className="w-full h-80 object-contain"
            src={product.image}
            alt=""
          />
        </div>
        <div className="">
          <h3 className="font-bold text-lg text-gray-600 mb-2">
            {product.title}
          </h3>
          <p className="font-medium text-gray-900 mb-2">
            {product.description}
          </p>
          <p className="font-bold text-lg text-gray-900 mb-2">
            $ {product.price}
          </p>
          <div className="flex gap-2 mb-2">{renderRate()}</div>
          <span className="block text-gray-400 mb-2">
            {product?.rating?.count} reviews
          </span>
          <span className="block uppercase text-red-500 mb-2">
            {product.category}
          </span>
          <Link to={"/"}>
            <Button type="button" className="mt-6 mx-auto">
              <span className=" text-gray-600 font-medium">Go Back Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
