import axios from "@/api/config";

async function login(usr) {
  try {
    return await axios.post("/user", {
      ...usr,
      type: "login",
      token: "123456789",
    });
  } catch (e) {
    return false;
  }
}

async function register(usr) {
  try {
    return await axios.post("/user", {
      ...usr,
      type: "register",
    });
  } catch (e) {
    return false;
  }
}

export default {
  login,
  register,
};
