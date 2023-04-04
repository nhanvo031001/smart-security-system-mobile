import { api } from "./configs/axiosConfig";

export const FloorAPI = {
    getAll: async function (cancel = false) {
        const response = await api.request({
            url: ``,
            method: "GET",
        })

        return response.data
    },

}