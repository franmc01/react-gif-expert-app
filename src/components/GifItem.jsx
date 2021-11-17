import PropTypes from "prop-types";

const GifItem = ({url, title}) => {

    return (
        <div className="col">
            <div className="card h-100 animate__animated animate__fadeIn">
                <img src={url} alt="imagen"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}

GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default GifItem;
