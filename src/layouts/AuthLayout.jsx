import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className=" bg-[#e7e7e7]">
      <section className="py-5 w-11/12 mx-auto">
        <Navbar></Navbar>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
