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
        id: 0,
        title: "",
        content: "",
        price: 0,
        image: "",
        category: "",
      },
      histories: [],
      history: {
        title: "",
        file: "",
        preview: "",
      },
    },
    histories: {
      active: [],
    },
    products: {
      active: {
        id: 0,
        title: "",
        content: "",
        price: 0,
        image: "",
        category: "",
        spec: "",
        other_images: [],
      },
    },
    carousel: [],
  };
}
export default makeState;
