import Axios from "./ServiceCaller";

let getNoteData = async () => {
    const {data} = await Axios.get('/get-notes');
    return data;
}

export const noteService = {
    getNoteData
};