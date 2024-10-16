import { Link } from "react-router-dom";
import { starActive, starDisabled } from "../../assets/svg";
import { type IProduct } from "../../types";
import Button from "../ui/Button/Button";
// -------------Types-------------
interface IProductCardProps {
  product: IProduct;
}
const ProductCard = (props: IProductCardProps) => {
  // -------------Props-------------
  const { id, title, price, category, image, rating } = props.product;
  // -------------Render-------------
  const renderRate = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating.rate ? starActive : starDisabled);
    }
    return stars.map((star, index) => {
      return <img key={index} src={star} className="max-w-6" />;
    });
  };

  return (
    <>
      <div className="border border-spacing-2 p-2 border-gray-300  hover:opacity-90">
        <div className="max-h-96 mb-2 bg-white">
          <img className="w-full h-80 object-contain" src={image} alt="" />
        </div>
        <div className="">
          <h3 className="font-medium  text-skin-base  mb-2">{title}</h3>
          <p className="font-bold text-lg text-skin-dark mb-2">$ {price}</p>
          <div className="flex gap-2 mb-2">{renderRate()}</div>
          <span className="block  text-skin-muted mb-2">
            {rating.count} reviews
          </span>
          <span className="block uppercase text-skin-colored mb-2">
            {category}
          </span>
          <Link to={`productDetails/${id}`}>
            <Button type="button" className="" variant="outlined">
              <span className="">More Details</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
