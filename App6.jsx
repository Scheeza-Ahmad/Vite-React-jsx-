import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  const router = createBrowserRouter([
      
    { path: "/", element: <><Navbar /><Home /></> },
    { path: "/contact", element: <><Navbar/><Contact /> </>},
  ]);
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
