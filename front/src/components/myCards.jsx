import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import cardsService from "../services/cardsService";
import favouritesService from "../services/favouritesService";
import Card from "./card";
import PageHeader from "./common/pageHeader";


class MyCards extends Component {
    state = {
        cards: [],
        filteredCards: []
    };

    componentDidMount() {
        this.getCards();
    }

    async getCards() {
        if (this.props.variation === "favourite-cards") {
            const { data } = await favouritesService.getFavourites();
            console.log({ data });
        } else {
            let result = {};
            if (this.props.variation === "my-cards") {
                result = await cardsService.getMyCards();
            } else {
                result = await cardsService.getAllCards();
            }
            if (result.data?.length) {
                this.setState({
                    cards: result.data,
                    filteredCards: result.data,
                });
            }
        }
    }

    handleCardDelete = async (id) => {

        try {
            await cardsService.deleteCard(id);
            toast("Card deleted");

            // solution 1
            // await this.getCards();

            // solution 2
            const { cards } = this.state;
            this.setState({
                cards: cards.filter((card) => card._id !== id),
            });
        } catch (e) {
            toast.error(e)
        }
    };

    handleSearch = (e) => {
        let value = e.target.value;
        let filteredCards = this.state.cards.filter((card) => card.bizName.toLowerCase().includes(value.toLowerCase()));
        this.setState({ filteredCards });
    }

    render() {
        const { filteredCards } = this.state;
        console.log("Rendering")

        return (
            <>
                <PageHeader title="My Cards Page" onChange={this.handleSearch} showSearch={true} />
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
                    {filteredCards.length ? (
                        filteredCards.map((card) => (
                            <Card
                                key={card._id}
                                card={card}
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
