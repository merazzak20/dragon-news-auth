import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        // console.log(res.user);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        // console.log(res.user);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleSignIn} className="btn ">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn ">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
