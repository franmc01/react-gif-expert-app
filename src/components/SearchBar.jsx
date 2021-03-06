import React, { Fragment } from 'react'

const SearchBar = () => {

    const [inputValue, setInputValue] = React.useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }
    return (
        <Fragment>
            <form onSubmit={handleSearchSubmit}>
                <div className="input-group mb-3">

                    <input type="text"
                        className="form-control"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Buscar..." />

                    <div className="input-group-append">
                        <button className="btn btn-primary" 
                                type="submit">Buscar</button>
                    </div>

                </div>
            </form>
        </Fragment>
    )
}

export default SearchBar
