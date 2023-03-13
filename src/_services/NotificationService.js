import Axios from "./ServiceCaller";
let getLastNotification = async (type) => {
    if (type === 'depotage') {
        const {data} = await Axios.get('/get-last-depotage');
        return data;
    } else if (type === 'expedition') {
        const {data} = await Axios.get('/get-last-expedition');
        return data;
    }
}

let getQualityNumber = async () => {
    const {data} = await Axios.get('/get-numeros-qualite');
    return data;
}
export const notificationService = {
    getLastNotification, getQualityNumber
};