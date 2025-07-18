import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function DrawCanvas({ paths = [], onChange }) {
  return (
    <ReactSketchCanvas
      width="100%"
      height="300px"
      // 펜 관련 초기값을 명시
      strokeWidth={4}
      strokeColor="black"
      initialStrokeWidth={4}
      initialStrokeColor="black"
      canvasColor="transparent"
      withTimestamp={false}
      exportWithImageDataUrl
      disableStrokeSelector       // *선택사항*
      initialPaths={paths}
      onChange={newPaths => onChange(newPaths)}
    />
  );
}
