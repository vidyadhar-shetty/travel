import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authcontext";

const Navbar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    
    return ( 
        <nav>
            <div className="logo">
                <Link to="/home">Travel karo</Link> 
                <i className='bx bxs-bus'></i>
            </div>

            <div className="tickets">
                <Link to="/bus">Bus Details</Link>
                {/* <Link to="/flight">Fligth</Link> */}
                {/* <Link to="/active">Active</Link> */}
                {/* <Link to="/profile">Profile</Link> */}
            </div>

            <div className="profile">
                <button onClick={() => {
                    logout();
                    navigate("/login");
                }}>Logout</button>
            </div>
        </nav>
    );
}
export default Navbar;






