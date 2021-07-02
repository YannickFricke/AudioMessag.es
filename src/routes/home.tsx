import React, { useState } from "react";
import { Block } from "../components/block";
import { Header } from "../components/header";
import { RecordingState } from "../RecordingState";
import {
  AudioOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { PermissionStatus } from "../components/permission_status";
import { useStream } from "../hooks/useStream";
import { useString } from "../hooks/helper/useString";

export function Home() {
  const [recordingState, setRecordingState] = useState(
    RecordingState.NOT_STARTED
  );
  const { startStream, stopStream } = useStream();
  const stringFunctions = useString();

  return (
    <div className="home">
      <Header />
      <PermissionStatus
        name="microphone"
        deniedText="Access to the microphone is denied!"
        promptedText="We will ask you the next time if we want to use your microphone!"
      />
      <Block recordingState={recordingState}>
        {getBlockContents(
          recordingState,
          setRecordingState,
          startStream,
          stopStream,
          stringFunctions.minify
        )}
      </Block>
    </div>
  );
}

function getBlockContents(
  recordingState: RecordingState,
  setRecordingState: React.Dispatch<React.SetStateAction<RecordingState>>,
  startStream: () => Promise<void>,
  stopStream: () => Promise<string | undefined>,
  minify: (
    audioData: string,
    round?: number
  ) => { encodedAudio: string; rounds: number }
) {
  switch (recordingState) {
    case RecordingState.NOT_STARTED:
      return (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            startStream().then(() => {
              setRecordingState(RecordingState.RECORDING);
            });
          }}
        >
          <span className="icon">
            <AudioOutlined />
          </span>
          <span>Start your recording</span>
        </div>
      );
    case RecordingState.RECORDING:
      return (
        <div>
          <div className="recording-indicator">
            <span className="icon">
              <ExclamationCircleOutlined />
            </span>
            <span>Recording</span>
          </div>
          <div
            className="stop-recording"
            onClick={() => {
              stopStream().then((data: string | undefined) => {
                setRecordingState(RecordingState.STOPPED);

                if (!data) {
                  return;
            }

                console.log(minify(data));
              });
            }}
          >
            <span className="icon">
              <StopOutlined />
            </span>
            <span>Stop recording</span>
          </div>
          <div
            className="delete-recording"
            onClick={() => {
              setRecordingState(RecordingState.NOT_STARTED);
            }}
          >
            <span className="icon">
              <DeleteOutlined />
            </span>
            <span>Delete recording</span>
          </div>
        </div>
      );
    default:
      return <div>test</div>;
  }
}
