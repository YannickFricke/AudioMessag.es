import React, { PropsWithChildren } from "react";
import { RecordingState } from "../RecordingState";

export interface BlockProps {
  recordingState: RecordingState;
}

export function Block(props: PropsWithChildren<BlockProps>) {
  return (
    <div className={`block ${getBlockClass(props.recordingState)}`}>
      {props.children}
    </div>
  );
}

function getBlockClass(recordingState: RecordingState) {
  switch (recordingState) {
    case RecordingState.NOT_STARTED:
      return "status-not-started";
    case RecordingState.RECORDING:
      return "status-recording";
    default:
      return "";
  }
}
