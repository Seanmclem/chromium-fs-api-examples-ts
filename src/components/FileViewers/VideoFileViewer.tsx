import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getVideoData, VideoData } from "../../utils/file-system-utils";
import { ViewerContainer } from "../FileViewerByType";

interface props {
  fileHandle: FileSystemFileHandle;
}

export const VideoFileViewer: React.FC<props> = ({ fileHandle }) => {
  const [data, setData] = useState<VideoData | undefined>(undefined);

  useEffect(() => {
    fileToUrlState(fileHandle);
  }, [fileHandle]);

  const fileToUrlState = async (fileHandle: FileSystemFileHandle) => {
    const dataResult = await getVideoData(fileHandle);
    setData(dataResult);
  };

  return (
    <ViewerContainer>
      {data ? (
        <video width="auto" height="auto" controls>
          <source src={data.blobUrl} type={data.type} />
        </video>
      ) : null}
    </ViewerContainer>
  );
};
