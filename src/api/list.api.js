import axios from 'axios';
import Cookies from 'cookies-js';
const API_URL = 'http://127.0.0.1:8000/';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const token = Cookies.get("sessiontoken");
api.xsrfCookieName = "csrftoken";
api.xsrfHeaderName = "X-CSRFToken";
api.withCredentials = true;
api.defaults.headers.common["Authorization"] = `Token ${token}`;
const router = {
    getProductsList: 'tienda/productos/'
}

export const getProductsList = () => api.get(router.getProductsList);