import { Outlet, Link } from "react-router-dom";
import '../styles/Layout.css';

const Layout=()=>{
    return(
        <>
        <div id="layout-container">
        
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="all-tests">Testy Baza</Link>
                    </li>
                    <li>
                        <Link to="your-data">Twoj test</Link>
                    </li>
                </ul>
            </nav>
        
        <main>
            <Outlet/>
        </main>
        <footer>
            &copy 2025 Bratku Corp
        </footer>
        </div>
        </>
    )

};
export default Layout