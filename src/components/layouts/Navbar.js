import { NavLink } from "react-router-dom";

import './Navbar.scss';

export default function Navbar() {
    // Initialisation ---------
    // Properties ---------
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <nav>
            <div className="navItem">
                <NavLink to="/bookings" >Bookings</NavLink>
            </div>
            <div className="navItem">
                <NavLink to="/vehicles" >Vehicles</NavLink>
            </div>
            <div className="navItem">
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className="navItem">
                <NavLink to="/" >Log in</NavLink>
            </div>
        </nav>
    )

}

            