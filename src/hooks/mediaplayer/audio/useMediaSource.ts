import { useRef } from 'react';

export function useMediaSource() {
    const componentReference = useRef<HTMLAudioElement | HTMLVideoElement>();

    const play = async () => {
        componentReference.current?.play();
    };

    const pause = () => {
        componentReference.current?.pause();
    };

    const mute = () => {
        if (componentReference.current === undefined) {
            return;
        }

        switch (true) {
            case componentReference.current instanceof HTMLAudioElement:
                componentReference.current.muted = true;
                break;
            case componentReference.current instanceof HTMLVideoElement:
                componentReference.current.muted = true;
                break;
            default:
                break;
        }
    };

    const unmute = () => {
        if (componentReference.current === undefined) {
            return;
        }

        switch (true) {
            case componentReference.current instanceof HTMLAudioElement:
                componentReference.current.muted = false;
                break;
            case componentReference.current instanceof HTMLVideoElement:
                componentReference.current.muted = false;
                break;
            default:
                break;
        }
    };

    return {
        componentReference,
        play,
        pause,
        mute,
        unmute,
    };
}
