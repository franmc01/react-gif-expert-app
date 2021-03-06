import React, { Fragment } from 'react'
import SearchBar from '../components/SearchBar';

const Gif = () => {

    const initialState = ['Goku', 'One Punch', 'Naruto', 'Doraemon']
    const [list, setList] = React.useState(initialState);

    return (
        <Fragment>
            <div className="container mt-5">
                <h3>GifExpertApp</h3>
                <SearchBar />
                <hr />
            </div>
        </Fragment>
    )
}

export default Gif
