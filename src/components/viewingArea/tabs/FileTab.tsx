import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { openTabs } from "../../../stores/openTabsStore";

interface placement {
  first: boolean;
  last: boolean;
}

interface props {
  name: string;
  path: string;
  fileHandle: FileSystemFileHandle;
  placement: placement;
  isActive: boolean;
}

interface ContainerStyle {
  isActive: boolean;
  placement: {
    first: boolean;
    last: boolean;
  };
}

const NameContainer = styled.div`
  user-select: none;
`;

const FileTabContainer = styled.div<ContainerStyle>`
  border-right: ${(props) =>
    props.placement.last ? "none" : "1px solid black"};
  background-color: ${({ isActive }) => (isActive ? "rgba(240,255,255,1)" : "initial")};
  box-shadow: ${({ isActive }) => (isActive ? "0px 0px 4px 0px #d4d4d4" : "initial")};
  padding: 0 10px;
  align-items: center;
  display: flex;
  cursor: default;
`;

export const FileTab: React.FC<props> = ({
  name,
  path,
  fileHandle,
  placement,
  isActive,
}) => {
  const closeTab = () => {
    openTabs.tabs = openTabs.tabs.filter(tab => tab.path !== path)
  };
  const makeActive = () => {
    openTabs.tabs.forEach((tab) => (tab.isActive = false));
    openTabs.tabs.forEach((tab) => {
      if (tab.path === path) {
        tab.isActive = true;
      }
    });
  };

  return (
    <FileTabContainer placement={placement} isActive={isActive}>
      <NameContainer onClick={makeActive}>{name}</NameContainer>
      <MdClose
        style={{ marginLeft: "10px", cursor: "pointer" }}
        onClick={closeTab}
      />
    </FileTabContainer>
  );
};
