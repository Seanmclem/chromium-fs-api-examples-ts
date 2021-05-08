import React, { useEffect, useState } from "react";
import { FileTab } from "../../../stores/fileStore";
import { getFileBlobUrl } from "../../../utils/file-system-utils";
import { ViewerContainer } from "../../FileViewerByType";

interface props {
  fileTab: FileTab;
}

export const ImageFileViewer: React.FC<props> = ({ fileTab }) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    fileToUrlState(fileTab.fileHandle);
  }, [fileTab.fileHandle]);

  const fileToUrlState = async (fileHandle: FileSystemFileHandle) => {
    const urlResult = await getFileBlobUrl(fileHandle);
    setUrl(urlResult);
  };

  return (
    <ViewerContainer
      isActive={fileTab.isActive}
    >
      {url ? (
        <img
          alt="failed to load. I'm sorry.."
          src={url}
          height="auto"
          width="auto"
        />
      ) : null}
    </ViewerContainer>
  );
};
