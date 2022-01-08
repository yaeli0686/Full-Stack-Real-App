

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
                        <input type="search" className="form-control ps-5 border-secondary" placeholder="Search..." aria-label="Search" onChange={props.onChange} />
                    </div>
                    <div className="dropdown">
                        <a className="btn btn-outline-secondary d-flex h-100 p-2" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={20} focusable="false" data-prefix="fas" data-icon="sort-amount-down" className="svg-inline--fa fa-sort-amount-down fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" /></svg>
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