import React from 'react';
import {Link} from 'react-router-dom';

function NaviPaintLantern() {
    return (
        <nav>
             <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <li>
                    <Link to="/paint/lantern/01"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Bị Hí</div></Link>
                </li>
                <li>
                    <Link to="/paint/lantern/02"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Li vẫn</div></Link>
                </li>
                <li>
                    <Link to="/paint/lantern/03"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Bồ lao</div></Link>
                </li>
                </ul>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            
                <li>
                    <Link to="/paint/lantern/04"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Bệ ngạn</div></Link>
                </li>
                <li>
                    <Link to="/paint/lantern/05"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Thao thiết</div></Link>
                </li>
                <li>
                    <Link to="/paint/lantern/06"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Công phúc</div></Link>
                </li>
                </ul>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            
                <li>
                    <Link to="/paint/lantern/07"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Nhai xế</div></Link>
                </li>
                <li>
                    <Link to="/paint/lantern/08"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Toan nghê</div></Link>
                </li>
                <li>
                    <Link  to={"/paint/lantern/09"} ><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/><div>Tiêu đồ</div></Link>
                </li>
                </ul>
           
        </nav>
    );
}

export default NaviPaintLantern;
