import Axios from "./ServiceCaller";

let getExpeditionPlanifier = async () => {
    const {data} = await Axios.get('/get-expeditions-planifier');
    return data;
}

let getExpeditionEncours = async () => {
    const {data} = await Axios.get('/get-expeditions-encours');
    return data;
}

let getExpeditionExpedier = async () => {
    const {data} = await Axios.get('/get-expeditions-expedier');
    return data;
}

let getExpeditionSortie = async () => {
    const {data} = await Axios.get('/get-expeditions-sortie');
    return data;
}

export const expeditionService = {
    getExpeditionPlanifier, getExpeditionEncours, getExpeditionExpedier, getExpeditionSortie
};