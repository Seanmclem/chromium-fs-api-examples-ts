import React from "react";
import styled from "styled-components";
import {
  Menu,
  MenuItem,
  MenuButton,
  // SubMenu
} from "@szhsin/react-menu";

import "@szhsin/react-menu/dist/index.css";
import { useHistory } from "react-router-dom";
import { useFileStore } from "../stores/fileStore";

const TopMenuContainer = styled.div`
  background-color: var(--color-panels);
  box-shadow: var(--shadow-panel);
  border-radius: 0 0 var(--radius-panel) var(--radius-panel);
  padding: 0 5px;
  margin: 0 var(--margins-panel);
  height: var(--top-menu-height);
  /* border: 1px solid black; */
`;

interface props {
  setAltRootHandle?: any;
}

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const TopMenu: React.FC<props> = ({ setAltRootHandle }) => {
  const history = useHistory();
  const openTabs = useFileStore(state => state.openTabs.tabs)
  const fileTab = openTabs.find(tab => tab.isActive)

  const showFolderPicker = async () => {
    const handle = await window.showDirectoryPicker();
    setAltRootHandle(handle);
  };

  const gotoAstTools = () => history.push("/ast-tools");
  const gotoFormCreator = () => history.push("/form-creator");

  return (
    <TopMenuContainer>
      <Menu menuButton={<MenuButton>File</MenuButton>}>
        <MenuItem onClick={showFolderPicker}>Open new root folder</MenuItem>
        {fileTab?.saveFunction ? (
          <MenuItem disabled={!fileTab.hasPendingChanges} onClick={fileTab.saveFunction}>Save</MenuItem>
        ) : ''}
      </Menu>
      <Menu menuButton={<MenuButton>About</MenuButton>}>
        <MenuItem
          onClick={() =>
            openInNewTab(
              "https://github.com/Seanmclem/chromium-fs-api-examples-ts"
            )
          }
        >
          Github Repo
        </MenuItem>
      </Menu>
      {/* <Menu menuButton={
                <MenuButton>Go To</MenuButton>
            }>
                <MenuItem onClick={gotoAstTools}>
                    AST Tools
                </MenuItem>
                <MenuItem onClick={gotoFormCreator}>
                    Form Creator
                </MenuItem>
            </Menu> */}
    </TopMenuContainer>
  );
};
