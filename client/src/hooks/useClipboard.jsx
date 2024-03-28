
const useClipboard = () => {

    const copyToClipboard = (button) => {
        navigator.clipboard.writeText(button)
    };

    return { copyToClipboard };
};

export default useClipboard;