import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FileTab as FileTabProp, useFileStore } from "../../../stores/fileStore";


interface placement {
  first: boolean;
  last: boolean;
}

interface props {
  fileTab: FileTabProp;
  placement: placement;
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
  fileTab,
  placement,
}) => {
  const { isActive, path, name } = fileTab
  const closeTab = useFileStore(state => state.closeTab)
  const makeActive = useFileStore(state => state.makeActive)

  return (
    <FileTabContainer placement={placement} isActive={isActive}>
      <NameContainer onClick={() => makeActive(path)}>{name}</NameContainer>
      <MdClose
        style={{ marginLeft: "10px", cursor: "pointer" }}
        onClick={() => closeTab(path)}
      />
    </FileTabContainer>
  );
};
