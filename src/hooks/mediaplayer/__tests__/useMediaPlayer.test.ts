import { useMediaPlayer } from '../useMediaPlayer';

describe('useMediaPlayer', () => {
    let audioElement: HTMLAudioElement;

    beforeEach(() => {
        audioElement = document.createElement('audio');
    });

    it('should be defined', () => {
        expect(useMediaPlayer).toBeDefined();

        audioElement.muted;
    });
});
