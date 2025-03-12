import messageInstance from "../axios_instances/messageInstance";

export const sendMessageApi = async (data) => {
    try {
        const response = await messageInstance.post('/', data);
        console.log('message send response:', response.data);
        return response.data;
    } catch (error) {
        console.log("error sending message:", error?.response?.data);
    }
}