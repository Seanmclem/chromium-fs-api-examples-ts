import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FileTab } from "../../../stores/fileStore";
import { getVideoData, VideoData } from "../../../utils/file-system-utils";
import { ViewerContainer } from "../../FileViewerByType";

interface props {
  fileTab: FileTab;
}

export const VideoFileViewer: React.FC<props> = ({ fileTab }) => {
  const [data, setData] = useState<VideoData | undefined>(undefined);

  useEffect(() => {
    fileToUrlState(fileTab.fileHandle);
  }, [fileTab.fileHandle]);

  const fileToUrlState = async (fileHandle: FileSystemFileHandle) => {
    const dataResult = await getVideoData(fileHandle);
    setData(dataResult);
  };

  return (
    <ViewerContainer
      isActive={fileTab.isActive}
    >
      {data ? (
        <video width="auto" height="auto" controls>
          <source src={data.blobUrl} type={data.type} />
        </video>
      ) : null}
    </ViewerContainer>
  );
};
