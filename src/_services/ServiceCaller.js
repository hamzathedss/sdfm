import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://sdfm.technass.com'
});

export default Axios;