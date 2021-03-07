import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (item) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(item).then(imgs => setState({
            data:imgs, loading: false
        }));
    }, [item]);

    return state;
}

export default useFetchGifs
