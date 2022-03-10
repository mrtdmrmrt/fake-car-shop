import store from "../store";
export default [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    beforeEnter: async (_to, _from, next) => {
      await store.dispatch("detail/getListDetail", _to.params.id);
      next();
    },
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue"),
  },
];
