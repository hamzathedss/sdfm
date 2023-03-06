import Axios from "./ServiceCaller";
let getDepotageData = async () => {
    const {data} = await Axios.get('/get-depotages');
    return data;
}

export const depotageService = {
    getDepotageData
};