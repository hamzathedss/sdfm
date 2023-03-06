import {Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "./private.css"

const PLayout = () => {
    return (
        <div className="private">
            <Sidebar/>
            <div className="main-content-holder">
                <div id="private_content" className="main-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default PLayout;