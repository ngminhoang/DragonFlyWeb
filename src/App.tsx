import { Route, Routes } from 'react-router-dom';
import NaviPaintDragon from './naviPaintDragon';
import PaintingDragon from './routers/drawing/PaintingDragon';
function App() {
    return (
        
        <div>
            <div>
            
                <Routes>
                    {/* <Route path='/' element={<Navi/>}/>
                    <Route path='/paint' element={<NaviPaint/>}/> */}
                    <Route 
                    path='/poster' 
                    element={
                        <img 
                        src={process.env.PUBLIC_URL + "/BackGround.png"} 
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            display: 'block',
                            margin: 'auto',
                            width: '100%',
                            objectFit: 'cover'
                        }} 
                        />
                    }
                    />
                    <Route path='/' element={<NaviPaintDragon/>}/>
                    <Route path='/react-fabric-drawing' element={<NaviPaintDragon/>}/>
                    <Route path='/paint/dragon' element={<NaviPaintDragon/>}/>
                    <Route path='/paint/dragon/01' element={<PaintingDragon dragonType='Dragon_01' name='Bị Hí' data='Bị Hí (tên khác là Bí Hí, Bá Hạ, Bát Phúc, Thạch Long Quy) là con trưởng của rồng. Có hình dáng thân rùa, đầu rồng. Chỉ duy nhất có Bí Hí chịu được trọng lượng lớn nên thường được chạm khắc  được gọi là "con thú mang bia".'/>}/>
                    <Route path='/paint/dragon/02' element={<PaintingDragon dragonType='Dragon_02' name='Si Vẫn' data='Si Vẫn (Tên gọi khác là Si Vĩ, Li Vẫn, con Kìm) là con thứ hai của Rồng. Sống ở biển, có đầu giống hoặc gần như đầu rồng, đuôi, vây, miệng rộng và thân ngắn. Mỗi khi nó đập đuôi xuống nước thì nước bắn lên tận trời và mù mịt cả trời đất.'/>}/>
                    <Route path='/paint/dragon/03' element={<PaintingDragon dragonType='Dragon_03' name='Bồ Lao' data='Bồ Lao là con thứ ba của Rồng. Sống ở biển, thích âm thanh lớn và thích gầm rống. Người xưa thường đúc trên quai chuông hình Bồ Lao, còn dùi thì làm theo hình cá kình với mong muốn tiếng chuông kêu vang xa. Do đó, Bồ Lao cũng được dùng để nói đến tiếng chuông chùa.'/>}/>
                    <Route path='/paint/dragon/04' element={<PaintingDragon dragonType='Dragon_04' name='Bệ Ngạn' data='Bệ Ngạn (tên gọi khác là Bệ Lao, Hiến Chương) là con thứ tư của Rồng. Có hình dáng giống hổ, răng nanh dài, sắc, có sức thị uy lớn, thích lý lẽ và có tài cãi lý đòi sự công bằng khi có bất công.'/>}/>
                    <Route path='/paint/dragon/05' element={<PaintingDragon dragonType='Dragon_05' name='Thao Thiết' data='Thao Thiết là con thứ năm của Rồng. Có đôi mắt to, miệng rộng, dáng vẻ kỳ lạ. Linh vật này tham ăn vô độ. Vì vậy, được đúc trên các đồ dùng trong ăn uống như ngụ ý nhắc nhở người ăn đừng háo ăn mà trở nên bất lịch sự.'/>}/>
                    <Route path='/paint/dragon/06' element={<PaintingDragon dragonType='Dragon_06' name='Công Phúc' data='Công Phúc là con thứ sáu của Rồng. Linh vật này thích nước nên được khắc làm vật trang trí ở các công trình hay phương tiện giao thông đường thủy như: cầu, rãnh dẫn nước, đập nước, bến tàu, thuyền bè… với mong muốn công phúc trông coi lượng nước phục vụ nhân dân.'/>}/>
                    <Route path='/paint/dragon/07' element={<PaintingDragon dragonType='Dragon_07' name='Nhai Xế' data='Nhai Xế (tên gọi khác là Nhai Xải, Nhai Tí) là con thứ bảy của Rồng. Linh vật có tính khí hung hăng, hay nổi cơn thịnh nộ và ham sát sinh nên thường được chạm khắc trên các vũ khí như đao, kiếm… ngụ ý thị uy, tăng thêm sức mạnh và lòng can đảm cho các chiến binh.'/>}/>
                    <Route path='/paint/dragon/08' element={<PaintingDragon dragonType='Dragon_08' name='Toan Nghê' data='Toan Nghê (còn gọi là Kim Nghê) là con thứ tám của Rồng. Có mình sư tử, đầu rồng, thích sự tĩnh lặng và thường ngồi yên ngắm cảnh khói hương nên được đúc làm vật trang trí trên các lò đốt trầm hương, ngụ ý mong muốn hương thơm của trầm hương luôn tỏa ngát.'/>}/>
                    <Route path='/paint/dragon/09' element={<PaintingDragon dragonType='Dragon_09' name='Tiêu Đồ' data='Tiêu Đồ (hay còn gọi là Thô Phủ) là con thứ chín của Rồng. Linh vật có tính khí lười biếng, thường cuộn tròn nằm ngủ, không thích có kẻ lạ xâm nhập lãnh địa của mình nên thường được khắc trên cánh cửa ra vào, ngụ ý răn đe kẻ lạ muốn xâm nhập.'/>}/>

                    {/* <Route path='/paint/lantern' element={<NaviPaintLantern/>}/>
                    <Route path='/paint/lantern/01' element={<DrawingLantern dragonType='Lantern_01'/>}/>
                    <Route path='/paint/lantern/02' element={<DrawingLantern dragonType='Lantern_02'/>}/>
                    <Route path='/paint/lantern/03' element={<DrawingLantern dragonType='Lantern_03'/>}/>
                    <Route path='/paint/lantern/04' element={<DrawingLantern dragonType='Lantern_04'/>}/>
                    <Route path='/paint/lantern/05' element={<DrawingLantern dragonType='Lantern_05'/>}/>
                    <Route path='/paint/lantern/06' element={<DrawingLantern dragonType='Lantern_06'/>}/>
                    <Route path='/paint/lantern/07' element={<DrawingLantern dragonType='Lantern_07'/>}/>
                    <Route path='/paint/lantern/08' element={<DrawingLantern dragonType='Lantern_08'/>}/>
                    <Route path='/paint/lantern/09' element={<DrawingLantern dragonType='Lantern_09'/>}/>

                    <Route path='/draw' element={<NaviDraw/>}/>
                    <Route path='/draw/dragon'  element={<PaintingDragon dragonType='Dragon'/>}/>
                    <Route path='/draw/lantern'  element={<DrawingLantern dragonType='Lantern'/>}/> */}
                </Routes>
            </div>
        </div>
    );
}

export default App;
