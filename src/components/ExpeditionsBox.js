import {useQuery} from "react-query";
import {useId} from "react";
import {expeditionService} from "../_services";
import {ThreeDots} from "react-loader-spinner";

const ExpeditionsBox = (props) => {
    const randomID = useId();
    const {isLoading, data} = useQuery(randomID, () => expeditionService.getExpeditionData());
    const expeditionData = data || {"data": []}

    if (isLoading) {
        return (
            <tbody>
            <tr>
                <td colSpan="4">
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#2068BD"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{justifyContent: "center"}}
                        wrapperClassName=""
                        visible={true}
                    />
                </td>
            </tr>
            </tbody>
        );
    }

    let statut = props.name;

    return (
        <>
            {statut === "encours" && (
                <tbody>
                {
                    expeditionData.encours && (
                        expeditionData.encours.map(ele =>
                            <tr className="text-center" key={ele.n_picking_order}>
                                <td className="py-2">{ele.n_picking_order.slice(ele.n_picking_order.indexOf('_') + 1)}</td>
                                <td className="py-2">{ele.matricule_vehicule}</td>
                                <td className="py-2">{`${ele.correspondant.substring(0, 7)}..`}</td>
                                <td className="py-2">{ele.quai_expedition}</td>
                            </tr>
                        )
                    )

                }
                </tbody>
            )}
            {statut === "expedier" && (
                <tbody>
                {
                    expeditionData.expedier && (
                        expeditionData.expedier.map(ele =>
                            <tr className="text-center" key={ele.n_picking_order}>
                                <td className="py-2">{ele.n_picking_order.slice(ele.n_picking_order.indexOf('_') + 1)}</td>
                                <td className="py-2">{ele.matricule_vehicule}</td>
                                <td className="py-2">{`${ele.correspondant.substring(0, 7)}..`}</td>
                                <td className="py-2">{ele.quai_expedition}</td>
                            </tr>
                        )
                    )

                }
                </tbody>
            )}
            {statut === "planifier" && (
                <tbody>
                {
                    expeditionData.planifier && (
                        expeditionData.planifier.map(ele =>
                            <tr className="text-center" key={ele.n_picking_order}>
                                <td className="py-2">{ele.n_picking_order.slice(ele.n_picking_order.indexOf('_') + 1)}</td>
                                <td className="py-2">{ele.matricule_vehicule}</td>
                                <td className="py-2">{`${ele.correspondant.substring(0, 7)}..`}</td>
                                <td className="py-2">{ele.quai_expedition}</td>
                            </tr>
                        )
                    )

                }
                </tbody>
            )}
            {statut === "sortie" && (
                <tbody>
                {
                    expeditionData.sortie && (
                        expeditionData.sortie.map(ele =>
                            <tr className="text-center" key={ele.n_picking_order}>
                                <td className="py-2">{ele.n_picking_order.slice(ele.n_picking_order.indexOf('_') + 1)}</td>
                                <td className="py-2">{ele.matricule_vehicule}</td>
                                <td className="py-2">{`${ele.correspondant.substring(0, 7)}..`}</td>
                                <td className="py-2">{ele.quai_expedition}</td>
                            </tr>
                        )
                    )

                }
                </tbody>
            )}
        </>
    );
}

export default ExpeditionsBox;