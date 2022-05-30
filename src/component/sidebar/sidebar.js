import IconMenu from "../../childcomponent/menu";
import ManagerMenu from "../../childcomponent/manage";
import avatar from '../../asset/avatar.png';

// import scss
import './style/sidebar.scss';
function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar-infor">
                <img src={avatar} alt="" />
                <div className="sidebar-infor-text">
                    <p style={{fontWeight: "bold"}}>Giám Đốc Nhỏ</p>
                    <p style={{fontSize: 12 + "px"}}>Chưa Chấm Công</p>
                </div>
            </div>
            <div className="sidebar-div">
                <p style={{fontWeight: "bold"}}>Cá Nhân</p>
            </div>
            <div className="sidebar-personal">
                <IconMenu />
            </div>
            <div className="sidebar-div">
                <p style={{fontWeight: "bold"}}>Quản Lý</p>
            </div>
            <div className="sidebar-manage">
                <ManagerMenu />
            </div>
        </div>
    );
}
export default Sidebar;