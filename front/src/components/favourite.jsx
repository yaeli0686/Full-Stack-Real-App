import React from 'react';
import { toast } from 'react-toastify';
import { handleFavouriteCard } from '../services/cardsService';

class Favourite extends React.Component {
    state = {
        isFavourite: this.props.isFavourite
    }

    handleClick = () => {
        if (!this.props.userID) {
            return toast.warning("Please first log in");
        }
        let operator = this.state.isFavourite ? "remove" : "add";
        let originalState = this.state.isFavourite;
        this.setState({
            isFavourite: !this.state.isFavourite
        })
        handleFavouriteCard(this.props.cardID, operator).catch(e => {
            this.setState({
                isFavourite: originalState
            })
        });
    }

    render() {
        let favouriteClass = this.state.isFavourite ? "bi bi-heart-fill text-danger" : "bi bi-heart text-white";

        return (
            <button type='button' className='fs-5 btn btn-link shadow-none favBtn' onClick={this.handleClick}>
                <i className={favouriteClass}></i>
            </button>
        )
    }
}

export default Favourite;