import carouselInstance from "../axios_instances/carouselInstance";

const getCarouselApi = async () => {
    try {
        const response = await carouselInstance.get('/');
        console.log('get carousel response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error fetching carousel:", error.response);
    }
}

const createCarouselApi = async () => {
    try {
        const response = await carouselInstance.get('/');
        console.log('get blogs response:', response);
        return response.data;
    } catch (error) {
        console.log("error fetching blogs:", error.response.data);
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
    createCarouselApi,
    updateCarouselApi,
    deleteCarouselApi,
}