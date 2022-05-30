import DashBroad from "../../component/dashbroad/dashbroad";

import logo from '../../asset/logo.png';
import avatar from '../../asset/avatar.png';
import Header from "../../component/header/header";
import Navbar from "../../component/navbar/navbar";
import DashPage from "../../component/dashpage/dashpage";

function Dash() {

    return(
        <div>
            <Header logo={logo} avatar={avatar} />
            <div className="dash-main">
                <Navbar />
                <DashPage />
            </div>
        </div>
    )
}
export default Dash;