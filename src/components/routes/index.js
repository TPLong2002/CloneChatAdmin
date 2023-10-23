import Chat from "../pages/Chat";
const publicRoutes = [
  { path: "/", component: Chat },
  { path: "/chat", component: Chat },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
