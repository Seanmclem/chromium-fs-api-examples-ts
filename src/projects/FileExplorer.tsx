import React, { useCallback, useState } from "react";
import { DirectoryContents } from "../components/directoryContents/DirectoryContents";
import styled from "styled-components";
import { FileViewerByType } from "../components/FileViewerByType";
import { TopMenu } from "../components/TopMenu";
import { ViewingArea } from "../components/FileViewers/ViewingArea";

const FileExplorerContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const InnerStuffContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - var(--top-menu-height)); // TODO: make variable
`;

export const FileExplorer: React.FC<{}> = () => {
  const [altRootHandle, setAltRootHandle] = useState<
    FileSystemDirectoryHandle | undefined
  >(undefined);

  const [selectedFile, setSelectedFile] = useState<
    FileSystemHandle | undefined
  >(undefined);
  // TODO: refactor for TABS

  const handleSelectFileCustom = useCallback(
    // TODO: refactor for TABS
    async (file: FileSystemFileHandle) => {
      console.log({ customFileFn: file });
      setSelectedFile(file);
    },
    []
  );

  return (
    <FileExplorerContainer>
      <TopMenu setAltRootHandle={setAltRootHandle} />
      <InnerStuffContainer>
        <DirectoryContents
          handleSelectFile={handleSelectFileCustom}
          altRootHandle={altRootHandle}
        />
        <ViewingArea />
        {/* <FileViewerByType fileHandle={selectedFile as FileSystemFileHandle} /> */}
      </InnerStuffContainer>
    </FileExplorerContainer>
  );
};
