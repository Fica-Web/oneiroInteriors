import carouselInstance from "../axios_instances/carouselInstance";
import { toast } from "react-toastify";

const getCarouselApi = async () => {
    try {
        const response = await carouselInstance.get('/');
        console.log('get carousel response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching carousel:", error.response);
    }
}

const getCarouselByIdApi = async (id) => {
    try {
        const response = await carouselInstance.get(`/${id}`);
        console.log('get carousel response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching carousel:", error.response);
    }
}

const createCarouselApi = async (data) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const response = await carouselInstance.post('/', data, config);
        console.log('creating carousel response:', response);
        toast.success(response.data.message)
        return response.data;
    } catch (error) {
        toast.error('Failed to Create carousel')
        console.log("error creating carousel:", error.response.data);
    }
}

const updateCarouselApi = async (id, data) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const response = await carouselInstance.put(`/${id}`, data, config);
        console.log('update carousel response:', response);
        toast.success(response.data.message);
        return response.data;
    } catch (error) {
        toast.error('Failed to update carousel')
        console.log("error updating carousel:", error.response.data);
    }
}

const deleteCarouselApi = async (id) => {
    try {
        const response = await carouselInstance.delete(`/${id}`);
        console.log('Delete carousel response:', response);
        return response.data;
    } catch (error) {
        console.log("error deleting carousel:", error.response.data);
    }
}

export  {
    getCarouselApi,
    getCarouselByIdApi,
    createCarouselApi,
    updateCarouselApi,
    deleteCarouselApi,
}