import api from "./api";
import { PRODUCT_URLS } from "../constants/END_POINTS";
const getProducts = (limit = 5, sort = "asc") => {
  return api.get(`${PRODUCT_URLS.products}?limit=${limit}&sort=${sort}`);
};
const getOneProduct = (id: number) => {
  return api.get(`${PRODUCT_URLS.products}/${id}`);
};

export { getProducts, getOneProduct };
