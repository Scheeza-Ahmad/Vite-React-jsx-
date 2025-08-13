import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4 text-white">
        <ul className="flex justify-around gap-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="ContactUs" className="hover:underline">Contact Us</Link></li>
          <li><Link to="AboutUs" className="hover:underline">About</Link></li>
        </ul>
      </nav>
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
