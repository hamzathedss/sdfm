import Axios from "./ServiceCaller";

let getImportsEnCours = async () => {
    const {data} = await Axios.get('/get-imports-encours');
    return data;
}

let getImportsEnRoute = async () => {
    const {data} = await Axios.get('/get-imports-enroute');
    return data;
}

let getImportsEnParc = async () => {
    const {data} = await Axios.get('/get-imports-enparc');
    return data;
}

let getImportsProgrammes = async () => {
    const {data} = await Axios.get('/get-imports-programmes');
    return data;
}

export const importsService = {
    getImportsEnCours, getImportsEnRoute, getImportsEnParc, getImportsProgrammes
};