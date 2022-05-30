
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useState } from 'react';

// import
import './calendar.scss';

function Calendar() {
    const [show, setShow] = useState('hidden');
    return(
        <div className="calendar">
            {
                (show === "show")?(
                    <>
                    <div className='calendar-header'>
                        <div>
                            <b>Lịch hẹn hôm nay</b>
                        </div>
                        <div onClick={() => setShow("hidden")}>
                            <RemoveOutlinedIcon sx={{fontWeight: "bold"}} />
                        </div>
                    </div>
                    <hr />
                    <div className="calendar-info">
                        <CalendarMonthOutlinedIcon sx={{fontSize: 40 + "px"}} />
                        <br />
                        <p>Không có lịch nào</p>
                    </div>
                    </>
                ):null
            }
            {
                (show === "hidden")?(
                    <>
                    <div className='calendar-header'>
                        <div>
                            <b>Lịch hẹn hôm nay</b>
                        </div>
                        <div onClick={() => setShow('show')}>
                            <AddBoxOutlinedIcon sx={{fontWeight: "bold"}} />
                        </div>
                    </div>
                    </>
                ):null
            }
        </div>
    );
}

export default Calendar;