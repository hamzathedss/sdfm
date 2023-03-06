import {useEffect, useState} from "react";
import LogoText from "../assets/logotext.png";

const Header = (props) => {
    const [time, setTime] = useState("");
    const updateTime = () => {
        const today = new Date();
        const hour = today.getHours().toString().padStart(2, "0");
        const minute = today.getMinutes().toString().padStart(2, "0");

        const currentTime = `${hour}:${minute}`;
        setTime(currentTime);
    };

    // Call updateTime() when the component mounts
    useEffect(() => {
        updateTime();
    }, []);

    const today = new Date();
    const date = today.toLocaleDateString();

    return (
        <div className="px-4 py-2 bg-white main-header shadow-sm d-flex align-items-center">
            <div className="main-title fs-4 fw-bold me-5">
                <img src={LogoText} alt="" className="logo-text"/>
            </div>
            <div>
                <div className="fw-bold fs-4">{date}</div>
                <div className="fw-bold fs-5">{time}</div>
            </div>
        </div>
    );
}

export default Header;