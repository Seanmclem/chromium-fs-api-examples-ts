import React from "react";
import styled from "styled-components";

import { useFileStore } from "../../../stores/fileStore";

import { FileTab } from "./FileTab";

interface props { }

const TabContainerMain = styled.div`
  display: flex;
  overflow-x: auto;
  height: 30px;
  border-radius: 10px 10px 0 0; // TODO: ^v needs vars
`;

export const TabContainer: React.FC<props> = () => {

  const openTabs = useFileStore(state => state.openTabs)

  // console.log('test', openTabsSnapshot.tabs)
  debugger
  return (
    <TabContainerMain>
      {openTabs.tabs.map((tab, index) =>
        tab.fileHandle ? (
          <FileTab
            key={tab.path}
            fileTab={tab}
            placement={{
              first: index === 0,
              last: index === openTabs.tabs.length - 1,
            }}
          />
        ) : (
          "error"
        )
      )}
    </TabContainerMain>
  );
};
