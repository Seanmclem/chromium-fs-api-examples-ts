import React from "react";
import styled from "styled-components";
import { FileViewerByType } from "../../FileViewerByType";

import { useFileStore } from "../../../stores/fileStore";


interface props { }

const Container = styled.div`
  /* border: 1px solid black; */
  position: relative;
  box-sizing: border-box;
  height: calc(100% - 30px); // TODO: ^v needs vars
  border-radius: 0 0 10px 10px;
`;

export const TabsStackAreaBody: React.FC<props> = () => {
  const openTabs = useFileStore(state => state.openTabs)
  // const activeFile = openTabs.tabs.find(tab => tab.isActive)
  debugger;

  return <Container>
    {openTabs.tabs.map(tab => (
      <FileViewerByType fileTab={tab} /> //activeFile?.fileHandle
    ))}
  </Container>;
};
