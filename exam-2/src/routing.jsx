import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeL } from "./pages/routes/routes";
import Layout from "./componets/layout/layout";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomeL/>
            },
        ]
    }
])


export default function MyRouterPro(){
    return <RouterProvider router={router}/>
}