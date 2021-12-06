

const PageHeader = (props) => {
    return (
        <div className="row pt-4 align-items-center">
            <div className="col-sm-6">
                <h1>{props.title}</h1>
            </div>
            {props.showSearch && <div className="col-sm-6">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" onChange={props.onChange} />
            </div>}
        </div>
    );
}

export default PageHeader;