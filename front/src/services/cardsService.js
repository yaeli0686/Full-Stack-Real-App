import httpService from "./httpService";
import { apiUrl } from "../config.json";

export function createCard(card) {
    return httpService.post(`${apiUrl}/cards`, card);
}

export function getMyCards() {
    return httpService.get(`${apiUrl}/cards/my-cards`);
}

export function getAllCards() {
    return httpService.get(`${apiUrl}/cards`);
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
    getAllCards,
    createCard,
    editCard,
    getMyCards,
    getCard,
    deleteCard,
};

export default cardsService;