function makeState() {
  return {
    app: {
      active: -1,
      search: {
        keyword: "",
        indexes: [],
        average: -1,
      },
      products: [],
      product: {
        title: "",
        content: "",
        price: 0,
        image: "",
      },
      histories: [],
      history: {
        title: "",
        file: "",
        preview: "",
      },
    },
    users: {
      active: "login",
      user: {
        credential: "",
        phone: "",
        usr: "",
        pass: "",
      },
      logged: false,
    },
    histories: {
      active: [],
    },
  };
}
export default makeState;
