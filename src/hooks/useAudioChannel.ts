import { useState } from "react";

export const useAudioChannel = () => {
    const [channelData, setChannelData] = useState<Array<Float32Array>>([]);

    const append = (data: Array<Float32Array>) => {
        setChannelData(channelData.concat(data));
    };

    const clear = () => {
        setChannelData([]);
    }

    return {
        channelData,
        setChannelData,
        append,
        clear,
    };
};
