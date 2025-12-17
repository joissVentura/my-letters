import { RouterProvider } from "react-router"
import { router } from "./Routing/router"

export const AppProvider = () => {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}