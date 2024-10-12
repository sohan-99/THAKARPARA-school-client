import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from './../../Provider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext); // Get user and logOut from AuthContext
    console.log(user);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admission');
    };

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.log(error));
    };

    return (
        <header className="bg-yellow-100 p-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                <img src="https://i.ibb.co/kcyFQqh/download.png" alt="School Logo" className="h-14 md:h-18 w-14 md:w-18 rounded-lg" />
                <div className="text-center md:text-left md:ml-4 lg:ml-16">
                    <Link to="/" className="block">
                        <h1 className="text-lg md:text-2xl font-bold text-green-800">
                            THAKARPARA HIGH SCHOOL
                        </h1>
                        <p className="text-sm md:text-base">School Code: 126088, EIIN: 126088</p>
                    </Link>
                </div>
            </div>
            <div className="flex items-center">
                <button onClick={handleClick} className="bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded">
                    Online Admission 2025
                </button>
                <div className="ml-4">
                    
                    {user ? (
                        <>
                            <span className="mr-2">{user.displayName}</span>
                            <button onClick={handleLogOut} className="w-[100px] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600  ">Logout</button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="w-[100px] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
