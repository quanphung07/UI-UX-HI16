import DashBroad from "../../component/dashbroad/dashbroad";
import Sidebar from "../../component/sidebar/sidebar";

import logo from '../../asset/logo.png';
import avatar from '../../asset/avatar.png';
import Header from "../../component/header/header";

function Home() {

    return(
        <div>
            <Header logo={logo} avatar={avatar} />
            <div className="dash-main">
                <Sidebar />
                <DashBroad />
            </div>
        </div>
    )
}
export default Home;