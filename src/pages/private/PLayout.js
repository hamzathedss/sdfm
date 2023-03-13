import {Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "./private.css"
import NewsFooter from "../../components/NewsFooter";

const PLayout = () => {
    return (
        <div className="private">
            <Sidebar/>
            <div className="main-content-holder">
                <div id="private_content" className="main-content">
                    <Outlet/>
                </div>
            </div>
            <div className="news-footer fixed-bottom bg-white">
                <NewsFooter/>
            </div>
        </div>
    );
}

export default PLayout;