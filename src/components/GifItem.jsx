import PropTypes from "prop-types";

const GifItem = ({url, title}) => {

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card h-100">
                <img src={url} alt={title}/>
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
