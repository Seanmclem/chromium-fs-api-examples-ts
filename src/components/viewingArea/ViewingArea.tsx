import React from "react";
import styled from "styled-components";
import { EmptyAreaBody } from "./body/EmptyAreaBody";
import { TabContainer } from "./tabs/TabsContainer";

export const ViewingAreaContainer = styled.div`
  background-color: var(--color-panels);
  box-shadow: var(--shadow-panel);
  border-radius: var(--radius-panel);
  margin: 15px var(--margins-panel) 15px var(--margins-panel);
  overflow: hidden;
  flex-grow: 1;

  width: auto;
  height: auto;

  //border: 1px solid black;
`;

interface props {}

export const ViewingArea: React.FC<props> = () => {
  return (
    <ViewingAreaContainer>
      <TabContainer /> {/* top bar of TABS */}
      <EmptyAreaBody /> {/* Body of output again */}
    </ViewingAreaContainer>
  );
};
