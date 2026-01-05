import { lazy } from "react";

const Profile =lazy(() => import("./profile"));
const Home =lazy(()=>import("./home"))
const Oformel =lazy(()=>import("./oformel"))
const Aftoraziya =lazy(()=>import("./aftoraziya"))
const Politka =lazy(()=>import("./politka/Index"))
export {Profile,Home,Oformel,Aftoraziya,Politka};