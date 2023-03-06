import {Navigate} from "react-router-dom";
import {accessService} from "../_services";
const AuthGuard = ({children}) => {
    if (!accessService.isLogged()) {
        return <Navigate to="/auth/login"/>;
    }
    return children;

};
export default AuthGuard;