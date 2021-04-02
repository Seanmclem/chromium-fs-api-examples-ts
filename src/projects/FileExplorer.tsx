import React, { useCallback, useState } from "react";
import { DirectoryContents } from "../components/directoryContents/DirectoryContents";
import styled from "styled-components";
import { FileViewerByType } from "../components/FileViewerByType";
import { TopMenu } from "../components/TopMenu";

const FileExplorerContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const InnerStuffContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 33px); // TODO: make variable
`;

const DirConWrap = styled.div``;

export const FileExplorer: React.FC<{}> = () => {
  const [altRootHandle, setAltRootHandle] = useState<
    FileSystemDirectoryHandle | undefined
  >(undefined);
  const [selectedFile, setSelectedFile] = useState<
    FileSystemHandle | undefined
  >(undefined);

  const handleSelectFileCustom = useCallback(
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
        {/* <DirConWrap className="dir-con-wrap"> */}
        <DirectoryContents
          handleSelectFile={handleSelectFileCustom}
          altRootHandle={altRootHandle}
        />
        {/* </DirConWrap> */}

        <FileViewerByType fileHandle={selectedFile as FileSystemFileHandle} />
      </InnerStuffContainer>
    </FileExplorerContainer>
  );
};
