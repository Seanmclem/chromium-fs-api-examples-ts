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

const TopMenuContainer = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 0 5px;
  margin: 0 5px;
  height: 30px;
  border: 1px solid black;
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
