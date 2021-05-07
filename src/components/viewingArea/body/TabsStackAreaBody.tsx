import React from "react";
import styled from "styled-components";
import { FileViewerByType } from "../../FileViewerByType";

import { useFileStore } from "../../../stores/fileStore";


interface props { }

const Container = styled.div`
  /* border: 1px solid black; */
  height: calc(100% - 30px); // TODO: ^v needs vars
  border-radius: 0 0 10px 10px;
  /* padding: 50px; */
`;

export const TabsStackAreaBody: React.FC<props> = () => {
  const openTabs = useFileStore(state => state.openTabs)
  const activeFile = openTabs.tabs.find(tab => tab.isActive)
  debugger;

  return <Container>
    <FileViewerByType fileHandle={activeFile?.fileHandle} />
  </Container>;
};
