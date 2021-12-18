import React from 'react';

class Favourite extends React.Component {

    // isFavourite:boolean,
    // onClick()

    render() {
        let favouriteClass = this.props.isFavourite ? "bi bi-heart-fill text-danger" : "bi bi-heart";

        return (
            <button type='button' className='fs-5 btn btn-link shadow-none favBtn'>
                <i className={favouriteClass}></i>
            </button>
        )
    }
}

export default Favourite;