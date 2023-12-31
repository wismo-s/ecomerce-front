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
    getProductsList: 'tienda/productos/',
    getCategoryList: 'tienda/categorias/',
    getUserDetails: 'usuario/detalles/',
    getUserDetailsExtra: 'usuario/detalles/extra/',
    postCreateUser: 'usuario/registar/',
    postLogin: 'usuario/login/',
}

export const getProductsList = () => api.get(router.getProductsList);
export const getProductsDetail = (slug) => api.get(`${router.getProductsList}${slug}/`);
export const getCategory = (slug) => api.get(`${router.getCategoryList}${slug}/`);
export const getUserDetails = () => api.get(router.getUserDetails);
export const postCreateUser = (data) => api.post(router.postCreateUser, data);
export const postLogin = (data) => api.post(router.postLogin, data);
export const putUserEdit = (data) => api.put(router.getUserDetails, data);
export const putUserEditDetails = (data) => api.put(router.getUserDetailsExtra, data);