import React from 'react';
import { usePermission } from '../hooks/permission/usePermission';
import { RecordingState } from '../RecordingState';
import { Block } from './block';

interface PermissionStatusProps {
  name: PermissionName;
  promptedText: string;
  grantedText?: string;
  deniedText: string;
}

export function PermissionStatus({name, promptedText, grantedText, deniedText}: PermissionStatusProps) {
  const { permissionState } = usePermission(name);

  if (permissionState === 'granted') {
    if (grantedText !== undefined) {
      return <div className="permission-status granted">{grantedText}</div>;
    }

    return null;
  }

  if (permissionState === 'denied') {
    return <Block recordingState={RecordingState.NOT_STARTED}><div className="permission-status denied">{deniedText}</div></Block>;
  }

  return <Block recordingState={RecordingState.NOT_STARTED}><div className="permission-status prompted">{promptedText}</div></Block>;
}
