import React, { Fragment } from 'react'
import Error from './Error';

const SearchBar = ({ setList }) => {

    const [inputValue, setInputValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleSearchSubmit = (e) => {

        e.preventDefault();
        if (inputValue.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        setList(list => [inputValue, ...list]);

    }

    return (
        <Fragment>
            <form onSubmit={handleSearchSubmit}>
                <div className="input-group mb-3">
                    <input type="text"
                        className={error ? 'form-control is-invalid' : 'form-control'}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Buscar..."
                        id="search" />

                    <div className="input-group-append">
                        <button className="btn btn-primary"
                            type="submit">Buscar</button>
                    </div>

                    { error && <Error /> }
                </div>
            </form>
        </Fragment>
    );
}

export default SearchBar;
