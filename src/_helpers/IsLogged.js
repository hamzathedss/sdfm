import {Navigate} from "react-router-dom";
import {accessService} from "../_services";

const IsCodeTrue = ({children}) => {
    if (accessService.isLogged()) {
        return <Navigate to="/depotages"/>;
    }
    return children;

};

export default IsCodeTrue;