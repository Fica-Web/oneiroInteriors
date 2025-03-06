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
        toast.error('Failed to Upload image')
        console.log("error creating carousel:", error.response.data);
    }
}

const updateCarouselApi = async () => {
    try {
        const response = await carouselInstance.get('/');
        console.log('get blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error fetching blogs:", error.response.data);
    }
}

const deleteCarouselApi = async () => {
    try {
        const response = await carouselInstance.get('/');
        console.log('get blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error fetching blogs:", error.response.data);
    }
}

export  {
    getCarouselApi,
    getCarouselByIdApi,
    createCarouselApi,
    updateCarouselApi,
    deleteCarouselApi,
}