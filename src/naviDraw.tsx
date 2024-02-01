import { Route, Routes, Link } from 'react-router-dom';
function NaviDraw(){
    return(
    <nav>
                <ul>
                    <li>
                        <Link to="/draw/dragon">Ve Rong</Link>
                    </li>
                    <li>
                        <Link to="/draw/lantern">Ve Long Den</Link>
                    </li>
                </ul>
     </nav>) 
}
export default NaviDraw