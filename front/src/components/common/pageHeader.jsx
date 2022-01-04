

const PageHeader = (props) => {
    return (
        <div className="row pt-4 align-items-center">
            <div className="col-sm-6">
                <h1>{props.title}</h1>
            </div>
            {props.showSearch && <div className="col-sm-6">
                <div className="searchWrapper position-relative">
                    <i class="bi bi-search position-absolute py-2 px-3"></i>
                    <input type="search" className="form-control ps-5" placeholder="Search..." aria-label="Search" onChange={props.onChange} />
                </div>
            </div>}
        </div>
    );
}

export default PageHeader;