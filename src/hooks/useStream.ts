import { useState } from "react";

let chunks: any[] = [];
let data = '';

export function useStream() {
  const [recorder, setRecorder] = useState<MediaRecorder | undefined>(
    undefined
  );

  const blobToBase64 = (blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  async function startStream() {
    const userStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });

    const tempRecorder = new MediaRecorder(userStream, {
      audioBitsPerSecond: 128000,
      mimeType: "audio/webm;codecs=opus",
    });

    tempRecorder.ondataavailable = function (event) {
      chunks.push(event.data);

      if (tempRecorder.state !== 'recording') {
        return;
      }

      let blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });

      blobToBase64(blob).then((base64Data => {
        chunks = [];

        //@ts-ignore
        data = base64Data;
      }));
    };

    data = '';
    tempRecorder.start(1000);
    setRecorder(tempRecorder);
  }

  async function stopStream() {
    if (recorder === undefined || recorder.state !== "recording") {
      return;
    }

    recorder.stop();

    return data;
  }

  return {
    startStream,
    stopStream,
  };
}
