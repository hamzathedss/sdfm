import {useState} from "react";
import {FaBell} from "react-icons/fa";
import Pusher from 'pusher-js';
import NotificationSound from "../assets/notification_sound.wav";

const NotifsHolder = (props) => {
    let dataType = props.type;

    const [outputData_Depo, setOutputData_Depo] = useState('');
    const [boxDepoRed, setDepoBoxRed] = useState(false);
    const [iconDepoRed, setIconDepoRed] = useState(false);

    const boxDepoClasses = 'background-gray-color rounded-3 p-3 border shadow-sm d-flex align-items-center ' + (boxDepoRed ? 'border-danger' : 'border-primary');
    const iconDepoClasses = (iconDepoRed ? 'text-danger' : 'text-primary');

    const [outputDataExpo_1, setOutputData_1] = useState('');
    const [outputDataExpo_2, setOutputData_2] = useState('');
    const [boxExpoRed, setExpoBoxRed] = useState(false);
    const [iconExpoRed, setIconExpoRed] = useState(false);

    const boxExpedClasses = 'background-gray-color rounded-3 p-2 border shadow-sm ' + (boxExpoRed ? 'border-danger' : 'border-primary');
    const iconExpoClasses = (iconExpoRed ? 'text-danger' : 'text-primary');

    const audio = new Audio(NotificationSound);

    Pusher.logToConsole = false;

    let pusher = new Pusher('5fdf984542cc12f08fb0', {
        cluster: 'eu'
    });

    let new_notifs, outputData, outputData1, outputData2;

    let channel = pusher.subscribe('sdfm-channel');

    if (dataType === "depotage") {
        channel.bind('sdfm-depotage-notification', function (data) {
            new_notifs = data;
            outputData = `Le vehicule ${new_notifs.vehicule} est sur le quai N ${new_notifs.N_de_quai}`;
            setDepoBoxRed(!boxDepoRed);
            setIconDepoRed(!iconDepoRed);
            setOutputData_Depo(outputData);
            audio.play();
            const interval = setInterval(() => {
                setDepoBoxRed(false);
                setIconDepoRed(false);
                setOutputData_Depo('');
                window.location.reload();
            }, 60000); // 1 min
            // utes in milliseconds
            return () => clearInterval(interval);
        });
        channel.bind('sdfm-depotage-parc', function (data) {
            new_notifs = data;
            outputData = `${new_notifs.vehicule} de ${new_notifs.client} est en parc`;
            setDepoBoxRed(!boxDepoRed);
            setIconDepoRed(!iconDepoRed);
            setOutputData_Depo(outputData);
            audio.play();
            const interval = setInterval(() => {
                setDepoBoxRed(false);
                setIconDepoRed(false);
                setOutputData_Depo('');
            }, 60000); // 1 min
            // utes in milliseconds
            return () => clearInterval(interval);
        });
    }

    if (dataType === "expedition") {
        channel.bind('sdfm-expedition-notification', function (data) {
            new_notifs = data;
            if (new_notifs.data.length > 0) {
                outputData1 = `${new_notifs.data[0].n_picking_order} : `;
                outputData1 += `${new_notifs.data[0].Destinataire} - ${new_notifs.data[0].NB_Colis_declare} colis`;
                if (new_notifs.data.length > 1) {
                    outputData1 += `, ${new_notifs.data[1].Destinataire} - ${new_notifs.data[1].NB_Colis_declare} colis`;
                }
                if (new_notifs.data.length > 2) {
                    outputData2 = `${new_notifs.data[2].Destinataire} - ${new_notifs.data[2].NB_Colis_declare} colis`;
                }
                if (new_notifs.data.length > 3) {
                    outputData2 += `, ${new_notifs.data[3].Destinataire} - ${new_notifs.data[3].NB_Colis_declare} colis`;
                }
            }
            setExpoBoxRed(!boxExpoRed);
            setIconExpoRed(!iconExpoRed);
            setOutputData_1(outputData1);
            outputData2 = outputData2 !== '' ? outputData2 : '';
            setOutputData_2(outputData2);
            audio.play();
            const interval = setInterval(() => {
                setExpoBoxRed(false);
                setIconExpoRed(false);
                setOutputData_1('');
                setOutputData_2('');
                window.location.reload();
            }, 60000); // 1 min
            // utes in milliseconds
            return () => clearInterval(interval);
        });
    }

    return (
        <>
            {dataType === "depotage" && (
                <div className={boxDepoClasses}>
                    <div><FaBell size="25" className={iconDepoClasses}/></div>
                    <div className="text-center flex-grow-1">{outputData_Depo}</div>
                </div>
            )}
            {dataType === "expedition" && (
                <>
                    <div className={boxExpedClasses}>
                        <div><FaBell size="25" className={iconExpoClasses}/></div>
                        <div className="text-center flex-grow-1">{outputDataExpo_1}</div>
                        <div className="text-center flex-grow-1">{outputDataExpo_2}</div>
                    </div>
                </>
            )}
        </>
    );
}

export default NotifsHolder;