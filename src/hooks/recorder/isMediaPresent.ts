export const isMediaPresent = () => {
    return (
        navigator.mediaDevices !== undefined &&
        navigator.mediaDevices.getUserMedia !== undefined
    );
};
