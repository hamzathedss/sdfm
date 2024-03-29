import {useEffect, useId, useState} from "react";
import LogoText from "../assets/logotext.png";
import NotifsHolder from "./NotifsHolder";
import {useQuery} from "react-query";
import {notificationService} from "../_services";

const Header = (props) => {
    const [time, setTime] = useState("");

    const randomID = useId();
    const {data} = useQuery(randomID, () => notificationService.getQualityNumber());
    const qualityNumbers = data || {"data": []};

    let qualityNum;
    if (props.type === "depotage") {
        qualityNum = qualityNumbers.num_depotage;
    }
    else if (props.type === "expedition") {
        qualityNum = qualityNumbers.num_expedition;
    }

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
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    const date = dd + '/' + mm + '/' + yyyy;

    return (
        <div className="px-xl-4 py-2 bg-white main-header shadow-sm row m-0 justify-content-center align-items-center">
            <div className="text-center text-lg-start col-md-4 col-xl-3 mb-2">
                <div className="main-title fw-bold">
                    <img src={LogoText} alt="" className="logo-text"/>
                </div>
            </div>
            <div className="col-5 col-md-4 col-xl-2 mb-2">
                <div className="text-center text-lg-start">
                    <div className="fw-bold">{date}</div>
                    <div className="fw-bold">{time}</div>
                </div>
            </div>
            <div className="col-7 col-md-4 col-xl-2 mb-2">
                <div className="text-center text-lg-start">
                    <span className="fw-bold text-main-color">
                        {props.title}
                    </span>
                    {/*<div className="text-black-50 small">*/}
                    {/*    {qualityNum}*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="col-xl-5 mb-2">
                <div>
                    <NotifsHolder type={props.type}/>
                </div>
            </div>
        </div>
    );
}

export default Header;