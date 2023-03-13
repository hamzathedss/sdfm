import Axios from "./ServiceCaller";

let getDepotageData = async (dataType) => {
    if (dataType === 'planifier') {
        const {data} = await Axios.get('/get-depotages-planifier');
        return data;
    } else if (dataType === 'encours') {
        const {data} = await Axios.get('/get-depotages-encours');
        return data;
    } else if (dataType === 'terminer') {
        const {data} = await Axios.get('/get-depotages-terminer');
        return data;
    } else if (dataType === 'sortie') {
        const {data} = await Axios.get('/get-depotages-sortie');
        return data;
    }
}

export const depotageService = {
    getDepotageData
};