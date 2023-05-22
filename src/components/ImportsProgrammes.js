import {useQuery} from "react-query";
import {useId} from "react";
import {importsService} from "../_services";
import {ThreeDots} from "react-loader-spinner";

const ImportsProgrammes = () => {
    const randomID = useId();

    const {isLoading, data} = useQuery(randomID, () => importsService.getImportsProgrammes());
    const importsData = data || {"data": []}

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
            Object.values(importsData).map(ele =>
                <tr className="text-center" key={ele.id}>
                    <td className="py-2">{ele.Dum}</td>
                    <td className="py-2">{ele.vehicule_id}</td>
                    <td className="py-2">{`${ele.correspondant_id.substring(0, 7)}..`}</td>
                    <td className="py-2">{ele.depotage_type}</td>
                </tr>
            )

        }
        </tbody>
    );
}

export default ImportsProgrammes;