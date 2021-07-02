import { useRef } from 'react';

/**
 * The options for the media player
 */
export interface MediaPlayerOptions {
    /**
     * When set to true all media sources will be muted from the beginning
     */
    muted?: boolean;
}

export function useMediaPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);

    return {
        audioRef,
    };
}
