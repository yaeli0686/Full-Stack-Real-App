import { Link } from "react-router-dom";
import Favourite from "./favourite";


const Card = ({
    card: { _id, bizImage, bizName, bizAddress, bizPhone, bizDescription },
    onDelete,
}) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-3 flex-grow-1">
            <div className="border-0 card d-flex flex-column h-100 shadow">
                <div className="imageWrapper d-flex align-items-center justify-content-center">
                    <img src={bizImage} alt={bizName} className="card-img-top" />
                </div>
                <div className="card-body flex-grow-1">
                    <div className="align-items-center d-flex flex justify-content-between mb-5 position-relative" style={{ marginTop: "-5em" }}>
                        <h5 className="card-title fs-4 fw-bold text-white text-truncate me-3">{bizName}</h5>
                        <Favourite isFavourite={true} />
                    </div>
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
                <div className="align-items-center card-body d-flex flex-grow-0 justify-content-between">
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
