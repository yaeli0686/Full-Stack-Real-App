import httpService from "./httpService";
import { apiUrl } from "../config.json";

export function createCard(card) {
    return httpService.post(`${apiUrl}/cards`, card);
}

export function getMyCards(variation = "") {   //["","my-cards","favourite-cards"]
    return httpService.get(`${apiUrl}/cards/${variation}`);
}

export function handleFavouriteCard(cardID, operatorVariation = "add") {
    return httpService.put(`${apiUrl}/cards/${cardID}/favourite/${operatorVariation}`);
}

export function editCard({ _id, ...body }) {
    return httpService.put(`${apiUrl}/cards/${_id}`, body);
}

export function getCard(id) {
    return httpService.get(`${apiUrl}/cards/${id}`);
}

export function deleteCard(id) {
    return httpService.delete(`${apiUrl}/cards/${id}`);
}

const cardsService = {
    createCard,
    editCard,
    getMyCards,
    getCard,
    deleteCard,
};

export default cardsService;