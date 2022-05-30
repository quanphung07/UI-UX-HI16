import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useState } from 'react';
import TableA from '../tableAccept/table';

// import
import '../work/asset/work.scss';

//
import user from '../../asset/user.png';

function Content(props) {
    return(
        <div style={{color: 'rgb(19, 179, 128)', fontSize: 17+"px"}}>
            {props.content}<br />
            <span style={{ 
                        fontSize: 14+"px",
                        color: 'black',
                    }}>
            {props.status}
            </span>
        </div>
    );
}

function Image(props) {
    return(
        <img style={{width: 50 + "px", height: 50 + "px", borderRadius: 100 + "%"}} src={props.url} alt="accept" />
    );
}

function Accept() {
    const [show, setShow] = useState('hidden');
    return(
        <div className="work-a">
            {
                (show === "show")?(
                    <>
                    <div className='work-header'>
                        <div>
                            <b>Đề xuất cần duyệt</b>
                        </div>
                        <div onClick={() => setShow("hidden")}>
                            <RemoveOutlinedIcon sx={{fontWeight: "bold"}} />
                        </div>
                    </div>
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Vũ Ngọc Minh'} status={'Đề xuất thanh toán chi phí cầu đường A1'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Phùng Xuân Quân'} status={'Yêu cầu phê duyệt báo cáo'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Đăng Khắc Đạt'} status={'Tuyển thêm nhân viên'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <div className='work-footer' onClick={() => setShow('show-all')}>
                        Xem tiếp ...
                    </div>
                    </>
                ):null
            }
            {
                (show === "hidden")?(
                    <>
                    <div className='work-header'>
                        <div>
                            <b>Đề xuất cần duyệt</b>
                        </div>
                        <div onClick={() => setShow('show')}>
                            <AddBoxOutlinedIcon sx={{fontWeight: "bold"}} />
                        </div>
                    </div>
                    </>
                ):null
            }
            {
                (show === "show-all")?(
                    <>
                    <div className='work-header'>
                        <div>
                            <b>Đề xuất cần duyệt</b>
                        </div>
                        <div onClick={() => setShow("hidden")}>
                            <RemoveOutlinedIcon sx={{fontWeight: "bold"}} />
                        </div>
                    </div>
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Vũ Ngọc Minh'} status={'Đề xuất thanh toán chi phí cầu đường A1'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Phùng Xuân Quân'} status={'Yêu cầu phê duyệt báo cáo'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Đăng Khắc Đạt'} status={'Tuyển thêm nhân viên'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Vũ Ngọc Minh'} status={'Đề xuất thanh toán chi phí cầu đường A1'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Phùng Xuân Quân'} status={'Yêu cầu phê duyệt báo cáo'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <TableA first={<Image url={user} />} 
                        second={<Content content={'Đăng Khắc Đạt'} status={'Tuyển thêm nhân viên'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    </>
                ):null
            }
        </div>
    );
}

export default Accept;