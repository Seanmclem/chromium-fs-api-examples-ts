import React from "react";
import styled from "styled-components";

interface placement {
  first: boolean;
  last: boolean;
}

interface props {
  name: string;
  path: string;
  fileHandle: FileSystemFileHandle;
  placement: placement;
}

interface ContainerStyle {
  placement: {
    first: boolean;
    last: boolean;
  };
}

const Container = styled.div<ContainerStyle>`
  padding: 0 10px;
  border-right: ${(props) =>
    props.placement.last ? "none" : "1px solid black"};
  align-items: center;
  display: flex;
`;

export const FileTab: React.FC<props> = ({
  name,
  path,
  fileHandle,
  placement,
}) => {
  return <Container placement={placement}>{name}</Container>;
};
