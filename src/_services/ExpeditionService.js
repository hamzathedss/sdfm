import Axios from "./ServiceCaller";
let getExpeditionData = async () => {
    const {data} = await Axios.get('/get-expeditions');
    return data;
}

export const expeditionService = {
    getExpeditionData
};