export function useRecorder() {
    const askForUserPermission = async (): Promise<{
        microphone: typeof microphonePermissionState.state;
        camera: typeof cameraPermissionState.state;
    }> => {
        const microphonePermissionState = await navigator.permissions.query({
            name: 'microphone',
        });
        const cameraPermissionState = await navigator.permissions.query({
            name: 'camera',
        });

        return {
            microphone: microphonePermissionState.state,
            camera: cameraPermissionState.state,
        };
    };

    const getDevices = async (
        audio: boolean = false,
        video: boolean = false,
    ): Promise<MediaStream> => {
        return await navigator.mediaDevices.getUserMedia({ audio, video });
    };

    // TODO: Implement useMicrophone and useCamera hooks

    const recordAudio = () => {};

    const recordVideo = () => {};

    return {
        askForUserPermission,
        getDevices,
        recordAudio,
        recordVideo,
    };
}
