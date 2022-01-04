

const PageHeader = (props) => {
    return (
        <div className="row pt-4 align-items-center">
            <div className="col-sm-6">
                <h1>{props.title}</h1>
            </div>
            {props.showSearch &&

                <div className="col-sm-6 d-flex gap-3">
                    <div className="searchWrapper position-relative flex-grow-1">
                        <i className="bi bi-search position-absolute py-2 px-3"></i>
                        <input type="search" className="form-control ps-5" placeholder="Search..." aria-label="Search" onChange={props.onChange} />
                    </div>
                    <div className="dropdown">
                        <a className="btn btn-outline-secondary" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-sort-down"></i>
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="/" onClick={(e) => props.onSort(e, "popularity")}>Popularuty</a></li>
                            <li><a className="dropdown-item" href="/" onClick={(e) => props.onSort(e, "name")}>Bussinness name</a></li>
                        </ul>
                    </div>

                </div>
            }
        </div>
    );
}

export default PageHeader;