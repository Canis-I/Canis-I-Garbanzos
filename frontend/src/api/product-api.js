import axios from "@/api/config";

async function getAllProducts() {
  try {
    return await axios.get("/product");
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

export default {
  getProduct,
  getAllProducts,
};
