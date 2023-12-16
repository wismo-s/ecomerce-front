import { useState, useEffect } from 'react'
import { getCategory } from '../api/list.api'
import { useParams } from 'react-router-dom';

export function useCategoryDetails() {
    const [category, setCategory] = useState([])
    const { slug } = useParams();

    useEffect(() => {
        getCategory(slug)
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                setCategory({error: 'No se pudo cargar la lista de productos'});
            });
    }, []);

    return category;
}
