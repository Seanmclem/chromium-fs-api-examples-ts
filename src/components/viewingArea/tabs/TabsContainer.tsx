import React from "react";
import styled from "styled-components";

import { useSnapshot } from "valtio";
import { openTabs } from "../../../stores/openTabsStore";
import { FileTab } from "./FileTab";

interface props {}

const TabContainerMain = styled.div`
  display: flex;
  height: 30px;
  border-radius: 10px 10px 0 0; // TODO: ^v needs vars
`;

export const TabContainer: React.FC<props> = () => {
  const openTabsSnapshot = useSnapshot(openTabs);

  return (
    <TabContainerMain>
      {openTabsSnapshot.tabs.map((tab, index) =>
        tab.fileHandle ? (
          <FileTab
            key={tab.path}
            name={tab.name}
            path={tab.path}
            fileHandle={tab.fileHandle}
            isActive={!!tab.isActive}
            placement={{
              first: index === 0,
              last: index === openTabsSnapshot.tabs.length - 1,
            }}
          />
        ) : (
          "error"
        )
      )}
    </TabContainerMain>
  );
};
