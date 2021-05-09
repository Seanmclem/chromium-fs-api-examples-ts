import React from "react";
import styled from "styled-components";
import { FileTab } from "../stores/fileStore";

import { getFileTypeFromHandle } from "../utils/filetype-utils";
import { ImageFileViewer } from "./viewingArea/body/ImageFileViewer";
import { TextFileViewer } from "./viewingArea/body/TextFileViewer";
import { VideoFileViewer } from "./viewingArea/body/VideoFileViewer";

interface props {
  fileTab: FileTab;
}

interface ViewerContainer_StyleProps {
  isActive: boolean;
}

export const ViewerContainer = styled.div<ViewerContainer_StyleProps>`
  flex-grow: 1;
  padding: 10%;

  --double-margin: 20px;
  margin: calc(var(--double-margin) / 2);
  width: calc(100% - var(--double-margin));

  background-color: #FFF;
  border: 1px solid black;
  border-radius: 10px;
  height: calc(100% - var(--double-margin));
  box-sizing: border-box;

  position: absolute;
  top: 0;
  z-index: ${({ isActive }) => (isActive ? 100 : 0)};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

export const FileViewerByType: React.FC<props> = ({ fileTab }) => {
  const { fileHandle } = fileTab
  if (fileHandle) {
    const type = getFileTypeFromHandle(fileHandle);

    if (type === "image") {
      return <ImageFileViewer fileTab={fileTab} />;
    } else if (type === "video") {
      return <VideoFileViewer fileTab={fileTab} />;
    } else if (type === "text") {
      return <TextFileViewer fileTab={fileTab} />;
    }
    return <div>file type not recognized</div>;
  } else {
    return null;
  }
};
