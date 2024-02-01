import { Link } from 'react-router-dom';
function Navi(){
    return(
    <nav>
                <ul>
                    <li>
                        <Link to="/paint">To Mau</Link>
                    </li>
                    <li>
                        <Link to="/draw">Ve Tranh</Link>
                    </li>
                </ul>
     </nav>) 
}
export default Navi