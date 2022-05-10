import axios from "./config";

async function getImage(name, origin) {
  try {
    return await axios.get("/res", {
      params: {
        type: "img",
        origin: origin,
        name: name,
      },
    });
  } catch (e) {
    return false;
  }
}

async function getText(name, origin) {
  try {
    return await axios.get("/res", {
      params: {
        type: "text",
        origin: origin,
        name: name,
      },
    });
  } catch (e) {
    return false;
  }
}

async function getRaw(name, origin) {
  try {
    return await axios.get("/res", {
      params: {
        type: "raw",
        origin: origin,
        name: name,
      },
    });
  } catch (e) {
    return false;
  }
}

export default {
  getImage,
  getText,
  getRaw,
};
