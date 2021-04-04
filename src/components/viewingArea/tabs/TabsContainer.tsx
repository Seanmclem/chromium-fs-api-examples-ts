import React from "react";
import styled from "styled-components";

interface props {}

const TabContainerMain = styled.div`
  /* border: 1px solid black; */
  height: 30px;
  border-radius: 10px 10px 0 0; // TODO: ^v needs vars
`;

export const TabContainer: React.FC<props> = () => {
  return <TabContainerMain>TAB 123</TabContainerMain>;
};
