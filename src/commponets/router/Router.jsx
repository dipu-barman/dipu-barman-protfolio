import { createBrowserRouter } from "react-router";
import RootLayout from "../Rootlayout/RootLayout";
import Home from "../../Page/Home";
import Projectdeatiles from "../Projects/Projectdeatiles";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index:true,
        element:<Home/>
      },
       {
       path:'deatiles',
        element:<Projectdeatiles></Projectdeatiles>
      }
    ]
  },
]);
