import {Routes, Route} from "react-router-dom";
import PLayout from "./PLayout";
import Error from "../../_utils/Error";
import Depotages from "./Depotages";
import Expeditions from "./Expeditions";
import Imports from "./Imports";
const PrivateRouter = () => {
    return (
        <Routes>
            <Route element={<PLayout/>}>
                <Route index element={<Depotages/>}/>
                <Route index path="/" element={<Depotages/>}/>
                <Route index path="depotages" element={<Depotages/>}/>
                <Route path="expeditions" element={<Expeditions/>}/>
                <Route path="imports" element={<Imports/>}/>

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
}

export default PrivateRouter;