import Axios from "./ServiceCaller";

let getDepotagePlanifier = async () => {
    const {data} = await Axios.get('/get-depotages-planifier');
    return data;
}

let getDepotageEncours = async () => {
    const {data} = await Axios.get('/get-depotages-encours');
    return data;
}

let getDepotageTerminees = async () => {
    const {data} = await Axios.get('/get-depotages-terminer');
    return data;
}

let getDepotageSortie = async () => {
    const {data} = await Axios.get('/get-depotages-sortie');
    return data;
}

export const depotageService = {
    getDepotagePlanifier, getDepotageEncours, getDepotageTerminees, getDepotageSortie
};