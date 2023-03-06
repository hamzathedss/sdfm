import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://sdfm-back.onrender.com/'
});

export default Axios;