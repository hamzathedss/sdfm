import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://139.99.130.111:5000'
});

export default Axios;