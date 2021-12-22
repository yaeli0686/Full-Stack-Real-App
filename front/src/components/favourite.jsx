import React from 'react';

class Favourite extends React.Component {

    render() {
        let favouriteClass = this.props.isFavourite ? "bi bi-heart-fill" : "bi bi-heart";

        return (
            <button type='button' className='fs-5 btn btn-link shadow-none text-danger favBtn' onClick={this.props.onClick}>
                <i className={favouriteClass}></i>
            </button>
        )
    }
}

export default Favourite;