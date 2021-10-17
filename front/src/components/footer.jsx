const Footer = () => {
    return (
        <div className="border-top py-3 text-center">
            <span>
                Real<i className="bi bi-emoji-smile mx-1"></i>App
            </span>
            <span className="ms-1 ">&copy;</span>
            <span className="ms-1">
                {new Date().getFullYear()}
            </span>
        </div>
    );
}

export default Footer;