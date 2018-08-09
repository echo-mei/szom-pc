import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dynamic",
      name: "dynamic",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "DynamicMonitor" */ "../views/DynamicMonitor.vue")
    },
    {
      path: "/unit",
      name: "unit",
      component: () =>
        import(/* webpackChunkName: "UnitManage" */ "../views/UnitManage.vue")
    },
    {
      path: "/person",
      name: "person",
      component: () =>
        import(/* webpackChunkName: "PersonManage" */ "../views/PersonManage.vue")
    },
    {
      path: "/user",
      name: "user",
      component: () =>
        import(/* webpackChunkName: "UserManage" */ "../views/UserManage.vue")
    }
  ]
});
