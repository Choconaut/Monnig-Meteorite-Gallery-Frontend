// Not all users can see the views defined here, e.g., a user must have 'orders' permission to see /orders
// See loadDynamicRoutes.js for how to filter views based on user permissions
const dynamicRoutes = [
  {
    path: "/orders",
    name: "orders",
    meta: { title: "Orders", permissions: ["orders"] },
    // component: () => import("@/views/Orders.vue"),
  },
  {
    path: "/users",
    name: "users",
    meta: { title: "VIP Users", permissions: ["users"] },
    // component: () => import("@/views/Users.vue"),
  },
];
export default dynamicRoutes;
