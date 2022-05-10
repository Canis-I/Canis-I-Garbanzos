import axios from "@/api/config";

async function getAllHistories() {
  try {
    return await axios.get("/histories");
  } catch (e) {
    return false;
  }
}

async function getHistory(file) {
  try {
    return await axios.get("/histories", {
      params: {
        filename: file,
      },
    });
  } catch (e) {
    return false;
  }
}
export default {
  getHistory,
  getAllHistories,
};
