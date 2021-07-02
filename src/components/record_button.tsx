import React from 'react';
import { PlayCircleOutlined, AudioOutlined } from '@ant-design/icons';
import bgImage from 'url:~/src/button_bg.jpg';
import { RecordingState } from '../RecordingState';

interface RecordButtonProps {
  state: RecordingState;
}

export function RecordButon(props: RecordButtonProps) {
  return <div className="record-button button">
    <AudioOutlined />
  </div>;
}
