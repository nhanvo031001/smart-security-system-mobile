import { api } from "./configs/axiosConfig";

export const eMapAPI = {
    update: async function (item, cancel = false) {
        const response = await api.request({
            url: ``,
            method: "PUT",
            data: item,
        })

        return response.data
    },
}