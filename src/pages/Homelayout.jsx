import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <section className="page">
        {isLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </div>
  );
};
export default Homelayout;
