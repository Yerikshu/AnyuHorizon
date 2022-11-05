import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/login",
    //   component: () => import("@/views/login/index.vue"),
    //   meta: {
    //     title: "登录",
    //   },
    // },
    {
      path: "/alarm",
      component: () => import("/src/views/AlarmView.vue"),
      meta: {
        title: "告警汇总",
      },
    },
    {
      path: "/settings",
      component: () => import("/src/components/base/layout/AsideLayout.vue"),
      meta: {
        title: "配置管理",
      },
      children: [
        {
          path: "/setting/system",
          meta: {
            title: "系统配置",
          },
          component: () => import("/src/views/settings/SystemView.vue"),
        },
        {
          path: "/setting/scan",
          meta: {
            title: "探测配置",
          },
          component: () => import("/src/views/settings/ScanView.vue"),
        },
        {
          path: "/setting/exclusion",
          meta: {
            title: "白名单配置",
          },
          component: () => import("/src/views/settings/ExclusionView.vue"),
        },
      ],
    },
    {
      path: "/404",
      name: 404,
      component: () => import("/src/views/404.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ],
});

export default router;
