import {NavLink} from "react-router-dom";
import LogoIcon from "../assets/logoicon.png";
import {FaBoxes, FaPallet} from "react-icons/fa";

const Sidebar = () => {
    const menuItem = [
        {
            path: "/depotages",
            name: "Dépotages",
            icon: <FaBoxes size="30"/>
        },
        {
            path: "/expeditions",
            name: "Expeditions",
            icon: <FaPallet size="30"/>
        }
    ]

    return (
        <div className="main-sidebar" style={{backgroundColor: "#252737"}}>
            <header className="position-relative mt-2 mb-2">
                <div className="d-flex align-items-center image ps-2">
                    <img src={LogoIcon} alt="" className="logo-icon"/>
                </div>
            </header>
            <div className="menu-bar mt-2 border-top">
                <div className="menu">
                    <div className="menu-links">
                        {
                            menuItem.map((item, index) => (
                                <div className="nav-link" key={index}>
                                    <NavLink to={item.path} key={index} className="nav-link-item">
                                        <span className="icon">
                                            {item.icon}
                                        </span>
                                        <span className="text nav-text">{item.name}</span>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;