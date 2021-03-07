import { Fragment } from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({ item }) => {

    const { data, loading } = useFetchGifs(item);
    return (
        <Fragment>
            <h4>{item}</h4>
            <br/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    loading ?  <p className="animate__animated animate__fadeIn animate__bounceOut">Loading...</p>
                            :  data.map(img => (
                                <GifItem key={img.id} {...img} />
                                ))
                }
            </div>
        </Fragment>
    )
}

export default GifGrid
