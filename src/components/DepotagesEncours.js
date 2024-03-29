import {useQuery} from "react-query";
import {useId} from "react";
import {depotageService} from "../_services";
import {ThreeDots} from "react-loader-spinner";

const DepotagesEncours = () => {
    const randomID = useId();

    const {isLoading, data} = useQuery(randomID, () => depotageService.getDepotageEncours());
    const depotagesData = data || {"data": []}

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

    return (
        <tbody>
        {
            Object.values(depotagesData).map(ele =>
                <tr className="text-center" key={ele.id}>
                    <td className="py-2">{ele.N_de_quai}</td>
                    <td className="py-2">{ele.vehicule_id}</td>
                    <td className="py-2">{`${ele.client_id.substring(0, 7)}..`}</td>
                    <td className="py-2">{ele.depotage_type_id}</td>
                </tr>
            )

        }
        </tbody>
    );
}

export default DepotagesEncours;