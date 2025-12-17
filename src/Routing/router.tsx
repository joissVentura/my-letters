import { createBrowserRouter } from "react-router";
import { HomePage } from "../Home/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        index: true,
    },

]);