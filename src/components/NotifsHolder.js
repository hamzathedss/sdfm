import {useId} from "react";
import {useQuery} from "react-query";
import {notificationService} from "../_services";
import {ThreeDots} from "react-loader-spinner";
import {FaBell} from "react-icons/fa";

const NotifsHolder = (props) => {
    const randomID = useId();

    let dataType = props.type;
    const {isLoading, data} = useQuery(randomID, () => notificationService.getLastNotification(dataType));
    const notificationData = data || {"data": []}

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

    return (
        <>
            {dataType === "depotage" && (
                <div className="background-gray-color rounded-3 p-3 border border-danger shadow-sm d-flex align-items-center">
                    <div><FaBell size="25" className="text-danger"/></div>
                    <div className="text-center flex-grow-1">{Object.keys(notificationData).length === 0 ? '' : `${notificationData.vehicule_id} de ${notificationData.client_id} en parc`}</div>
                </div>
            )}
            {dataType === "expedition" && (
                <div className="background-gray-color rounded-3 p-2 border border-danger shadow-sm d-flex">
                    <div><FaBell size="25" className="text-danger"/></div>
                    <div className="text-center flex-grow-1">
                        <span className="fw-bold me-2 text-black-50">{notificationData[0] ? `${notificationData[0].n_picking_order}:` : ''}</span>
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