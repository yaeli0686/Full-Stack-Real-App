import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import cardsService from "../services/cardsService";
import Card from "./card";
import PageHeader from "./common/pageHeader";


class MyCards extends Component {
    _isMounted = false;

    state = {
        cards: [],
        filteredCards: [],
        sortedCards: [],
        sortBy: ""
    };

    async componentDidMount() {
        this._isMounted = true;
        await this.getCards();

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async getCards() {
        const { data } = await cardsService.getMyCards(this.props.variation);
        if (data.length && this._isMounted) {
            this.setState({
                cards: data,
                filteredCards: data,
                sortedCards: data
            });
        }
    }

    handleCardDelete = async (id) => {

        try {
            await cardsService.deleteCard(id);
            toast("Card deleted");

            // solution 1
            // await this.getCards();

            // solution 2
            // const { cards } = this.state;
            // this.setState({
            //     cards: cards.filter((card) => card._id !== id),
            // });

            // solution 3
            setTimeout(() => {
                window.location.reload();
            }, 3000)

        } catch (e) {
            toast.error(e)
        }
    };

    handleSearch = (e) => {
        let value = e.target.value;
        let filteredCards = this.state.cards.filter((card) => card.bizName.toLowerCase().includes(value.toLowerCase()));
        this.setState({ filteredCards },
            this.handleSort(e, this.state.sortBy)
        );
    }

    handleSort = (event, sortBy) => {
        event.preventDefault();

        this.setState({ sortBy }, () => {
            let newSortedCards;
            if (!this.state.sortBy) {
                newSortedCards = [...this.state.filteredCards];
            }
            if (this.state.sortBy === "name") {
                newSortedCards = [...this.state.filteredCards].sort((a, b) => {
                    if (a.bizName < b.bizName) {
                        return -1;
                    }
                    if (a.bizName > b.bizName) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (this.state.sortBy === "popularity") {
                newSortedCards = [...this.state.filteredCards].sort((a, b) => {
                    if (a.favouriteBy.length > b.favouriteBy.length) {
                        return -1;
                    }
                    if (a.favouriteBy.length < b.favouriteBy.length) {
                        return 1;
                    }
                    return 0;
                });
            }
            this.setState({ sortedCards: newSortedCards });
        });
    }

    render() {
        const { sortedCards } = this.state;


        return (
            <>
                <PageHeader title="My Cards Page" onChange={this.handleSearch} onSort={this.handleSort} showSearch={true} />
                <div className="row">
                    <div className="col-12">
                        <p>Your cards are listed below...</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/create-card" className="btn btn-lg btn-primary w-100">Create a New Card</Link>
                    </div>
                </div>
                <div className="g-4 my-4 row">
                    {sortedCards.length ? (
                        sortedCards.map((card) => (
                            <Card
                                key={card._id}
                                card={card}
                                user={this.props.user}
                                onDelete={() => this.handleCardDelete(card._id)}
                            />
                        ))
                    ) : (
                        <h5>No cards yet...</h5>
                    )}
                </div>
            </>
        );
    }
}

export default MyCards;
