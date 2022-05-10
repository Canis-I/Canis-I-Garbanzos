import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Shop from "@/components/Shop";
import Product from "@/components/Product";
import Blog from "@/components/BlogEntry";
import Post from "@/components/Post";
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
          path: "/garbanzos_shop",
          component: Shop,
          name: "Shop",
        },
        {
          path: "/garbanzos_product",
          component: Product,
          name: "Product",
        },
        {
          path: "/garbanzos_blog",
          component: Blog,
          name: "Blog",
        },
        {
          path: "/garbanzos_post",
          component: Post,
          name: "Post",
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
