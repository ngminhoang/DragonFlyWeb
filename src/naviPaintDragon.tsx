import React from 'react';
import {Link} from 'react-router-dom';

function NaviPaintDragon() {
    return (
        <nav style={{}}>
             <h1 style={{color:'white',paddingTop:'20px',height:'40px',backgroundColor:'RGB(31,142,135)', fontFamily: 'Arial, sans-serif', paddingLeft:5 ,alignContent:'center'}}> HÃY CHỌN HÌNH BẠN MUỐN TÔ</h1>
             <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <li>
                    <Link to="/paint/dragon/01"><img src={process.env.PUBLIC_URL + "/Dragon_01.png"} width={55} height={290}/></Link>
                    {/* <div>Bị Hí</div> */}
                </li>
                <li>
                    <Link to="/paint/dragon/02"><img src={process.env.PUBLIC_URL + "/Dragon_02.png"} width={55} height={290}/></Link>
                    {/* <div>Li vẫn</div> */}
                </li>
                <li>
                    <Link to="/paint/dragon/03"><img src={process.env.PUBLIC_URL + "/Dragon_03.png"} width={55} height={290}/></Link>
                    {/* <div>Bồ lao</div> */}
                </li>
                </ul>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            
                <li>
                    <Link to="/paint/dragon/04"><img src={process.env.PUBLIC_URL + "/Dragon_04.png"} width={55} height={290}/></Link>
                    {/* <div>Bệ ngạn</div> */}
                </li>
                <li>
                    <Link to="/paint/dragon/05"><img src={process.env.PUBLIC_URL + "/Dragon_05.png"} width={55} height={290}/></Link>
                    {/* <div>Thao thiết</div> */}
                </li>
                <li>
                    <Link to="/paint/dragon/06"><img src={process.env.PUBLIC_URL + "/Dragon_06.png"} width={55} height={290}/></Link>
                    {/* <div>Công phúc</div> */}
                </li>
                </ul>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            
                <li>
                    <Link to="/paint/dragon/07"><img src={process.env.PUBLIC_URL + "/Dragon_07.png"} width={55} height={290}/></Link>
                    {/* <div>Nhai xế</div> */}
                </li>
                <li>
                    <Link to="/paint/dragon/08"><img src={process.env.PUBLIC_URL + "/Dragon_08.png"} width={55} height={290}/></Link>
                    {/* <div>Toan nghê</div> */}
                </li>
                <li>
                    <Link to="/paint/dragon/09"><img src={process.env.PUBLIC_URL + "/Dragon_09.png"} width={55} height={290}/></Link>
                    {/* <div>Tiêu đồ</div> */}
                </li>
                </ul>
           
        </nav>
    );
}

export default NaviPaintDragon;
