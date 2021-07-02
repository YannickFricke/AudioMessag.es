import { createRef } from 'react';
import { AudioRef } from '../../types';
import { useMediaSource } from '../useMediaSource';


describe('useMediaSource', () => {
    let audioElement: HTMLAudioElement;
    let audioRef: AudioRef;

    let mediaSource: ReturnType<typeof useMediaSource>;

    beforeEach(() => {
        audioElement = document.createElement('audio');
        audioElement.play = jest.fn();

        audioRef = createRef<HTMLAudioElement>();

        // @ts-ignore
        audioRef.current = audioElement;

        mediaSource = useMediaSource(audioRef);
    });

    it('should be able to play the media source', async () => {
        expect(audioElement.play).not.toBeCalled();

        let hasEnded = false;

        await mediaSource.play();

        audioElement.onended = (event) => {
            hasEnded = true;
        };

        expect(audioElement.play).toBeCalled();
    });

    it.todo('should be able to pause the media source');

    it.todo('should be able to stop the media source');

    it.todo('should check if the media source was played once');

    describe('Duration', () => {
        // audioElement.duration;
        it.todo('should be able to get the duration of the media source');
    });
});
