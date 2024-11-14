import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      Auth
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
