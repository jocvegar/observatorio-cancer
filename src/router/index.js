import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue"),
  },
  {
    path: "/observatorio/acerca",
    name: "Acerca",
    component: () => import("../views/observatorio/Acerca.vue"),
  },
  {
    path: "/observatorio/mision_vision",
    name: "MisionVision",
    component: () => import("../views/observatorio/MisionVision.vue"),
  },
  {
    path: "/observatorio/modelo",
    name: "Modelo",
    component: () => import("../views/observatorio/Modelo.vue"),
  },
  {
    path: "/observatorio/fundacion",
    name: "Fundacion",
    component: () => import("../views/observatorio/Fundacion.vue"),
  },
  {
    path: "/cancer_en_cifras/datos",
    name: "Datos",
    component: () => import("../views/cancer_en_cifras/Datos.vue"),
  },
  {
    path: "/cancer_en_cifras/indicadores",
    name: "Indicadores",
    component: () => import("../views/cancer_en_cifras/Indicadores.vue"),
  },
  {
    path: "/cancer_en_cifras/herramientas",
    name: "Herramientas",
    component: () => import("../views/cancer_en_cifras/Herramientas.vue"),
  },
  {
    path: "/publicaciones/informes",
    name: "Informes",
    component: () => import("../views/publicaciones/Informes.vue"),
  },
  {
    path: "/publicaciones/boletines",
    name: "Boletines",
    component: () => import("../views/publicaciones/Boletines.vue"),
  },
  {
    path: "/recursos/infografias",
    name: "Infografias",
    component: () => import("../views/recursos/Infografias.vue"),
  },
  {
    path: "/recursos/videos",
    name: "Videos",
    component: () => import("../views/recursos/Videos.vue"),
  },
  {
    path: "/mensaje-presidente",
    name: "Mensaje",
    component: () => import("../views/Mensaje.vue"),
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
