import {useId} from "react";
import {useQuery} from "react-query";
import {notificationService} from "../_services";
import {ThreeDots} from "react-loader-spinner";
import {FaBell} from "react-icons/fa";
import Pusher from 'pusher-js';
import NotificationSound from "../assets/notification_sound.wav";

const NotifsHolder = (props) => {
    const randomID = useId();

    let dataType = props.type;
    const {isLoading, data} = useQuery(randomID, () => notificationService.getLastNotification(dataType));
    const notificationData = data || {"data": []}

    const audio = new Audio(NotificationSound);

    if (isLoading) {
        return (
            <div>
                <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#2068BD"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{justifyContent: "center"}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        );
    }

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('5fdf984542cc12f08fb0', {
        cluster: 'eu'
    });

    let new_notifs;
    let outputData;
    var channel = pusher.subscribe('sdfm-channel');
    let notifs_box_holder = document.getElementById("notifs_box_holder");
    let notifs_holder = document.getElementById("notifs_holder");
    let notifs_icon = document.getElementById("notifs_icon");

    channel.bind('sdfm-depotage', function (data) {
        // new_notifs = JSON.stringify(data);
        new_notifs = data;
        if (dataType === "depotage") {
            outputData = `${new_notifs.vehicule} de ${new_notifs.client} est en parc`;
        }
        notifs_box_holder.classList.add('border-danger');
        notifs_icon.classList.add('text-danger');
        notifs_holder.innerHTML = outputData;
        audio.play();
        const interval = setInterval(() => {
            notifs_box_holder.classList.remove('border-danger');
            notifs_icon.classList.remove('text-danger');
            notifs_holder.innerHTML = '';
        }, 60000); // 1 min
        // utes in milliseconds
        return () => clearInterval(interval);
    });

    channel.bind('sdfm-vehicule-quai', function (data) {
        // new_notifs = JSON.stringify(data);
        new_notifs = data;
        if (dataType === "depotage") {
            outputData = `Le vehicule ${new_notifs.vehicule} est sur le quai N ${new_notifs.N_de_quai}`;
        }
        notifs_box_holder.classList.add('border-danger');
        notifs_icon.classList.add('text-danger');
        notifs_holder.innerHTML = outputData;
        audio.play();
        const interval = setInterval(() => {
            notifs_box_holder.classList.remove('border-danger');
            notifs_icon.classList.remove('text-danger');
            notifs_holder.innerHTML = '';
        }, 60000); // 1 min
        // utes in milliseconds
        return () => clearInterval(interval);
    });

    return (
        <>
            {dataType === "depotage" && (
                <div id="notifs_box_holder"
                     className="background-gray-color rounded-3 p-3 border border-primary shadow-sm d-flex align-items-center">
                    <div><FaBell size="25" className="text-primary" id="notifs_icon"/></div>
                    <div id="notifs_holder"
                         className="text-center flex-grow-1">{Object.keys(notificationData).length === 0 ? '' : `${notificationData.vehicule_id} de ${notificationData.client_id} en parc`}</div>
                </div>
            )}
            {dataType === "expedition" && (
                <div className="background-gray-color rounded-3 p-2 border border-danger shadow-sm d-flex">
                    <div><FaBell size="25" className="text-danger"/></div>
                    <div id="notifs_holder" className="text-center flex-grow-1">
                        <span
                            className="fw-bold me-2 text-black-50">{notificationData[0] ? `${notificationData[0].n_picking_order}:` : ''}</span>
                        {Object.values(notificationData).map((ele, index) =>
                            <span key={index}>
                                <span className="d-none d-sm-inline">
                                    <span
                                        className="me-2">{ele.Destinataire} - {ele.NB_Colis_declare}{(index !== 1 && index !== 3) && (<>,</>)}</span>
                                    {index === 1 && (
                                        <br/>
                                    )}
                                </span>
                                <span className="d-sm-none">
                                    <div
                                        className="me-2">{ele.Destinataire} - {ele.NB_Colis_declare}{(index !== 3) && (<>,</>)}
                                    </div>
                                </span>
                            </span>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default NotifsHolder;