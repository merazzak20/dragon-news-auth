import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userSignIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    setErrorMessage(null);
    setSuccess(false);

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userSignIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setSuccess(true);
        navigate(location?.state ? location.state : "/");
        // console.log(user);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        // console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">
          Login Your Account
        </h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>

          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Successfully Sign In</p>}

          <p className="text-center my-5">
            Don't have an account?{" "}
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
