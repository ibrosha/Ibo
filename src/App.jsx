import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./../src/App.css"
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import NonFound from "./Pages/NonFound";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/page2",
        element:<Page2/>
      },
      {
        path:"/page3",
        element:<Page3/>
      },
      {
        path:"/page4",
        element:<Page4/>
      },
      {
        path:"/page5",
        element:<Page5/>
      },
      {
        path:"/page6",
        element:<Page6/>
      },
      {
        path:"/page7",
        element:<Page7/>
      },
      {
        path:"/page8",
        element:<Page8/>
      },
      {
        path:"*",
        element:<NonFound/>
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
