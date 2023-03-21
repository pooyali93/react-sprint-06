import Header from './Header.js';
import Navbar from './Navbar.js';
import Main from './Main.js';
import Footer from './Footer.js';

import './Layout.scss';

export default function Layout(props) {
    return (
        <div className='container'>
            <div className="grid grid-responsive">
                <div className=" header"><Header /></div>
                <div className="nav"><Navbar /></div>
                <div className=" main">
                   <Main/>  
                   {props.children} 
                </div>
                <div className="footer"><Footer/></div>
            </div>
        </div>
    );

}

