import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("business", "routes/business.tsx"),
    route("personal", "routes/personal.tsx"),
    route("legal", "routes/legal.tsx"),
] satisfies RouteConfig;
