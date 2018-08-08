import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dynamic",
      name: "dynamic",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dynamic" */ "../views/dynamic.vue")
    },
    {
      path: "/unit",
      name: "unit",
      component: () =>
        import(/* webpackChunkName: "unit" */ "../views/unit.vue")
    },
    {
      path: "/person",
      name: "person",
      component: () => 
        import(/* webpackChunkName: "person" */ "../views/person.vue")
    },
    {
      path: "/user",
      name: "user",
      component: () => 
        import(/* webpackChunkName: "user" */ "../views/user.vue")
    }
  ]
});
