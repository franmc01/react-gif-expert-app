import React, { Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifItem from './GifItem';

const GifGrid = ({ item }) => {

    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        getGifs(item).then(data => setImages(data));
    }, [item])


    return (
        <Fragment>
            <h4>{item}</h4>
            <br/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    images.map(img => (
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default GifGrid
