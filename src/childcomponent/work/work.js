
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useState } from 'react';
import Table from '../table/table';

// import
import './asset/work.scss';

function Content(props) {
    return(
        <div style={{color: 'rgb(19, 179, 128)', fontSize: 15+"px"}}>
            {props.content}
            <span style={{background: 'orange', 
                        marginLeft: 10+"px", 
                        padding: 3+"px", 
                        fontSize: 10+"px",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: 2+"px"
                    }}>
            {props.status}
            </span>
        </div>
    );
}

function Work() {
    const [show, setShow] = useState('hidden');
    return(
        <div className="work">
            {
                (show === "show")?(
                    <>
                    <div className='work-header'>
                        <div>
                            <b>Công việc hôm nay</b>
                        </div>
                        <div onClick={() => setShow("hidden")}>
                            <RemoveOutlinedIcon sx={{fontWeight: "bold"}} />
                        </div>
                    </div>
                    <hr />
                    <Table first={<b>#</b>} second={<b>Công việc</b>} three={<b>Thời gian</b>} />
                    <hr />
                    <Table first={<p>1</p>} 
                        second={<Content content={'Giúp khách hàng hoàn thiện thủ tục ký hợp đồng'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <Table first={<p>2</p>} 
                        second={<Content content={'Nghiên cứu sản phẩm'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <Table first={<p>3</p>} 
                        second={<Content content={'Chăm sóc khách hàng trước khi bán'} status={'Quá hạn 29 ngày'} />} 
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
                            <b>Công việc hôm nay</b>
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
                            <b>Công việc hôm nay</b>
                        </div>
                        <div onClick={() => setShow("hidden")}>
                            <RemoveOutlinedIcon sx={{fontWeight: "bold"}} />
                        </div>
                    </div>
                    <hr />
                    <Table first={<b>#</b>} second={<b>Công việc</b>} three={<b>Thời gian</b>} />
                    <hr />
                    <Table first={<p>1</p>} 
                        second={<Content content={'Giúp khách hàng hoàn thiện thủ tục ký hợp đồng'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <Table first={<p>2</p>} 
                        second={<Content content={'Nghiên cứu sản phẩm'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <Table first={<p>3</p>} 
                        second={<Content content={'Chăm sóc khách hàng trước khi bán'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <Table first={<p>4</p>} 
                        second={<Content content={'Giúp khách hàng hoàn thiện thủ tục ký hợp đồng'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <Table first={<p>5</p>} 
                        second={<Content content={'Nghiên cứu sản phẩm'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    <hr />
                    <Table first={<p>6</p>} 
                        second={<Content content={'Chăm sóc khách hàng trước khi bán'} status={'Quá hạn 29 ngày'} />} 
                        three={<p>18/11-19/11</p>} 
                    />
                    </>
                ):null
            }
        </div>
    );
}

export default Work;