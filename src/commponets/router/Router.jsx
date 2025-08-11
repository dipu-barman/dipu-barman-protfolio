import { createBrowserRouter } from "react-router";
import RootLayout from "../Rootlayout/RootLayout";
import Home from "../../Page/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index:true,
        element:<Home/>
      }
    ]
  },
]);
