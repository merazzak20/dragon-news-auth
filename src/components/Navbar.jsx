import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user?.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          {user && user?.photoURL ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-neutral rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
