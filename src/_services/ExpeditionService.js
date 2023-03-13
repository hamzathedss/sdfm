import Axios from "./ServiceCaller";

let getExpeditionData = async (dataType) => {
    if (dataType === 'planifier') {
        const {data} = await Axios.get('/get-expeditions-planifier');
        return data;
    } else if (dataType === 'encours') {
        const {data} = await Axios.get('/get-expeditions-encours');
        return data;
    } else if (dataType === 'expedier') {
        const {data} = await Axios.get('/get-expeditions-expedier');
        return data;
    } else if (dataType === 'sortie') {
        const {data} = await Axios.get('/get-expeditions-sortie');
        return data;
    }
}

export const expeditionService = {
    getExpeditionData
};