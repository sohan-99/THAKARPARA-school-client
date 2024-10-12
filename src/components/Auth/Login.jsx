/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                toast.success("Login successfully!");
                e.target.reset();
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((error) => {
                toast.error("Login failed: " + error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                toast.success("Login with Google successful!");
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-700">Login now!</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"} // Toggle input type
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-9 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600">
                    New to Thakarpara high school |{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
                <div className="text-center mt-4">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>

            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Login;
