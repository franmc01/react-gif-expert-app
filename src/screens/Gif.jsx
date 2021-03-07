import React, { Fragment } from 'react'
import GifGrid from '../components/GifGrid';
import SearchBar from '../components/SearchBar';

const Gif = () => {

    const [list, setList] = React.useState([]);

    return (
        <Fragment>
            <div className="container mt-5">
                <h3>GifExpertApp</h3>
                <SearchBar setList={setList} />
                <hr />
                <ol>
                    { list.map(item => (
                        <GifGrid key={item} item={item} />
                      ))
                    }
                </ol>
            </div>
        </Fragment>
    )
}

export default Gif
