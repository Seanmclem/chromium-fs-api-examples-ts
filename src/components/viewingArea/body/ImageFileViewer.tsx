import React, { useEffect, useState } from "react";
import { getFileBlobUrl } from "../../../utils/file-system-utils";
import { ViewerContainer } from "../../FileViewerByType";

interface props {
  fileHandle: FileSystemFileHandle;
}

export const ImageFileViewer: React.FC<props> = ({ fileHandle }) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    fileToUrlState(fileHandle);
  }, [fileHandle]);

  const fileToUrlState = async (fileHandle: FileSystemFileHandle) => {
    const urlResult = await getFileBlobUrl(fileHandle);
    setUrl(urlResult);
  };

  return (
    <ViewerContainer>
      {url ? (
        <img
          alt="failed to load. I'm sorry.."
          src={url}
          height="100px"
          width="100px"
        />
      ) : null}
    </ViewerContainer>
  );
};
