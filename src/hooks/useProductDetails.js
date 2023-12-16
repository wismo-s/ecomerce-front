import { useEffect, useState } from "react";
import { getProductsDetail } from "../api/list.api.js";
import { useParams } from 'react-router-dom'

export const useProductsDetail = () => {
    const [ product, setproduct ] = useState([])
    const { slug } = useParams();

    useEffect(() => {
        getProductsDetail(slug)
            .then((response) => {
                setproduct(response.data);
            })
            .catch((error) => {
                setproduct({error: 'No se pudo cargar la lista de productos'});
            });
    }, []);
    return product;
};