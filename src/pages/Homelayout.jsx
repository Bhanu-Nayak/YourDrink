import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  return (
    <div>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </div>
  );
};
export default Homelayout;
