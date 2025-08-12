import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navvbar from "./components/Navvbar";
function App() {
  const router = createBrowserRouter([
      
    { path: "/", element: <><Navvbar /><Home /></> },
    { path: "/contact", element: <><Navvbar/><Contact /> </>},
  ]);
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
