import { useEffect, useState } from "react";
import { getProductsList } from "../api/list.api.js";

export const useProducts = () => {
    const [ products, setproducts ] = useState([])

    useEffect(() => {
        getProductsList()
            .then((response) => {
                setproducts(response.data);
            })
            .catch((error) => {
                setproducts({error: 'No se pudo cargar la lista de productos'});
            });
    }, []);
    return products;
};