import { Route, Routes, Link } from 'react-router-dom';
function NaviPaint(){
    return(
    <nav>
                <ul>
                    <li>
                        <Link to="/paint/dragon">To Rong</Link>
                    </li>
                    <li>
                        <Link to="/paint/lantern">To Long Den</Link>
                    </li>
                </ul>
     </nav>) 
}
export default NaviPaint