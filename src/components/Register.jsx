import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 6) {
      setErrorMessage({ ...errorMessage, name: "must be 6 charecter" });
      return;
    }
    const photo = form.get("img");
    const email = form.get("email");
    const password = form.get("password");
    const terms = form.get("terms");
    // console.log({ name, photo, email, password, terms });

    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        updateUserProfile({ dispalyName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">
          register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {errorMessage.name && (
            <label className="label text-xs text-red-600">
              {errorMessage.name}
            </label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              name="img"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-5">
              <input type="checkbox" className="checkbox" name="terms" />
              <span className="label-text text-base font-medium">
                Accept terms & condition
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>

          <p className="text-center my-5">
            Already have an account?{" "}
            <Link className="text-red-500" to="/auth/login">
              Sign in
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
