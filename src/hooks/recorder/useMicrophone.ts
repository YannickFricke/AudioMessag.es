import { useState } from 'react';
import { isMediaPresent } from './isMediaPresent';

export const useAudioChannel = () => {
    const [channelData, setChannelData] = useState<Array<Float32Array>>([]);

    const append = (data: Array<Float32Array>) => {
        setChannelData(channelData.concat(data));
    };

    return {
        channelData,
        setChannelData,
        append,
    };
};

export const useMicrophone = () => {
    const startStream = async () => {
        const {
            channelData: leftAudioChannel,
            append: appendToLeftAudioChannel,
        } = useAudioChannel();

        if (!isMediaPresent()) {
            return;
        }

        const mediaStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        const context = new AudioContext();

        // creates an audio node from the microphone incoming stream
        let stream = context.createMediaStreamSource(mediaStream);

        // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
        const bufferSize = 2048;
        const numberOfInputChannels = 2;
        const numberOfOutputChannels = 2;
        const recordingLength = 0;

        let recorder;

        if (context.createScriptProcessor) {
            recorder = context.createScriptProcessor(
                bufferSize,
                numberOfInputChannels,
                numberOfOutputChannels,
            );
        } else {
            // @ts-ignore
            recorder = context.createJavaScriptNode(
                bufferSize,
                numberOfInputChannels,
                numberOfOutputChannels,
            );
        }

        recorder.onaudioprocess = function (e: any) {
            console.log('on audio progress', { e });
        };

        // we connect the recorder with the input stream
        stream.connect(recorder);
        recorder.connect(context.destination);

        console.log({ mediaStream });


        // audioElementRef.current.srcObject = mediaStream;
    };

    return {
        startStream,
    };
};
