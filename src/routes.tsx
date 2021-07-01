import { Home, Login, Register } from "./pages";

export default [
  { path: "/", exact: true, component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];
