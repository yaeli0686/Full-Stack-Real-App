

const Input = ({ required, name, label, error, ...rest }) => {
    return (
        <div className="form-group mb-2">
            <label htmlFor={name}>
                {required && <span className="text-danger">* </span>}
                {label}</label>
            <input name={name} id={name} className="form-control" {...rest} />
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};

export default Input;