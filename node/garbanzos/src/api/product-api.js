import axios from "axios";

async function getAllProducts() {
  try {
    return await axios.get("/products");
  } catch (e) {
    return false;
  }
}

async function getProduct(id) {
  try {
    return await axios.get("/product", {
      params: {
        id: id,
      },
    });
  } catch (e) {
    return false;
  }
}

async function getCarousel() {
  try {
    return await axios.get("/carousel");
  } catch (e) {
    return false;
  }
}

async function getCategories() {
  try {
    return await axios.get("/categories");
  } catch (e) {
    return false;
  }
}

export default {
  getProduct,
  getAllProducts,
  getCarousel,
  getCategories,
};
