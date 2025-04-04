export const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = "anonymous"; // Prevent CORS issues
        image.src = url;

        image.onload = () => resolve(image);
        image.onerror = (error) => reject(error);
    });
