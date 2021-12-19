import httpService from "./httpService";
import { apiUrl } from "../config.json";
export function createFavourite(favourite) {
    return httpService.post(`${apiUrl}/favourites`, favourite);
}

export function getFavourites() {
    return httpService.get(`${apiUrl}/favourites`);
}

export function deleteFavourite(id) {
    return httpService.delete(`${apiUrl}/favourite/${id}`);
}

const favouritesService = {
    createFavourite,
    getFavourites,
    deleteFavourite,
};

export default favouritesService;