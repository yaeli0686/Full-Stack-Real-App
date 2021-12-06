import { Link } from "react-router-dom";

const Card = ({
    card: { _id, bizImage, bizName, bizAddress, bizPhone, bizDescription },
    onDelete,
}) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3">
            <div className="card">
                <div className="imageWrapper d-flex align-items-center justify-content-center">
                    <img src={bizImage} alt={bizName} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{bizName}</h5>
                    <p className="card-text">{bizDescription}</p>

                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <a target="_blank" rel="noreferrer" href={"tel:" + bizPhone}>
                            <i className="bi bi-telephone-fill me-2"></i>
                            {bizPhone}
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={
                                "https://www.google.com/maps/search/?api=1&query=" + bizAddress
                            }
                        >
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            {bizAddress}
                        </a>
                    </li>

                </ul>
                <div className="card-body d-flex justify-content-between">
                    <Link className="card-link" to={`/my-cards/edit/${_id}`}>
                        <i className="bi bi-pencil-fill me-2"></i> Edit
                    </Link>
                    <button className="btn btn-danger" onClick={onDelete}>
                        DELETE
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Card;
