import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Shop from "@/components/Shop";
import Product from "@/components/Product";
import Cart from "@/components/Cart";
import Layout from "@/components/Layout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          component: Home,
          name: "Home",
        },
        {
          path: "/garbanzos_shop/:id(\\d+)*",
          component: Shop,
          name: "Shop",
        },
        {
          path: "/garbanzos_product/:id(\\d+)*",
          component: Product,
          name: "Product",
        },
        {
          path: "/garbanzos_cart",
          component: Cart,
          name: "Cart",
        },
      ],
    },
  ],
  mode: "history",
});
