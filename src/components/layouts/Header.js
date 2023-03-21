import { Link } from 'react-router-dom'
import './Header.scss'
import { useAuth } from '../auth/useAuth.js';


export default function Header() {
    // Properties ---------
    const { loggedinUser } = useAuth();
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <header>
            <Link to="/">
                <h1>Car Dealership</h1>
            </Link>

            {
                loggedinUser &&
                <div className="welcome">
                    <p>{`Welcome | ${loggedinUser.FIRSTNAME} ${loggedinUser.LASTNAME} | `}
                    </p>
                    
                </div>
            }
            
            <p>Logout</p>


        </header>
    )

}
