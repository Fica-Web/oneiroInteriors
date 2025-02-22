import { createImage } from "./createImage"; // Helper to load image

const getCroppedImg = async (imageSrc, cropAreaPixels) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return null;

    canvas.width = cropAreaPixels.width;
    canvas.height = cropAreaPixels.height;

    ctx.drawImage(
        image,
        cropAreaPixels.x,
        cropAreaPixels.y,
        cropAreaPixels.width,
        cropAreaPixels.height,
        0,
        0,
        cropAreaPixels.width,
        cropAreaPixels.height
    );

    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (!blob) {
                console.error("Canvas is empty");
                return reject(new Error("Canvas is empty"));
            }
            resolve(blob);
        }, "image/jpeg");
    });
};

export default getCroppedImg;