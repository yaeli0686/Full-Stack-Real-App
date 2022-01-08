import React from 'react';
import { toast } from 'react-toastify';
import { handleFavouriteCard } from '../services/cardsService';

class Favourite extends React.Component {
    state = {
        isFavourite: this.props.isFavourite
    }

    handleClick = () => {
        if (!this.props.userID) {
            return toast.warning("You have to be logged in first.");
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
        return (
            <button data-title={this.props.favouriteCounter} type='button' className={`align-items-center btn btn-link d-flex favBtn fs-4 justify-content-center p-3 position-relative shadow-none`} onClick={this.handleClick}>
                {this.state.isFavourite && <i className="bi bi-heart-fill position-absolute text-danger"></i>}
                <i className="bi bi-heart position-absolute text-white"></i>
            </button>
        )
    }
}

export default Favourite;