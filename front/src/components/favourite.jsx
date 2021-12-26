import React from 'react';
import { handleFavouriteCard } from '../services/cardsService';

class Favourite extends React.Component {

    // isFavourite:boolean,
    // onClick()

    handleClick = () => {
        if (!this.props.isFavourite) {//add to favourites
            handleFavouriteCard(this.props.cardID, "add");
        } else {
            //remove from favourites
            handleFavouriteCard(this.props.cardID, "remove");
        }
    }

    render() {
        let favouriteClass = this.props.isFavourite ? "bi bi-heart-fill text-danger" : "bi bi-heart text-white";

        return (
            <button type='button' className='fs-5 btn btn-link shadow-none favBtn' onClick={this.handleClick}>
                <i className={favouriteClass}></i>
            </button>
        )
    }
}

export default Favourite;