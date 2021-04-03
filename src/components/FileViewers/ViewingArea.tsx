import React from "react";
import styled from "styled-components";

export const ViewingAreaContainer = styled.div`
  background-color: var(--color-panels);
  box-shadow: var(--shadow-panel);
  border-radius: var(--radius-panel);
  margin: 15px var(--margins-panel) 15px var(--margins-panel);

  flex-grow: 1;
  padding: 10%;

  width: auto;
  height: auto;

  //border: 1px solid black;
`;

interface props {}

export const ViewingArea: React.FC<props> = ({}) => {
  return <ViewingAreaContainer>Viewing Area Container</ViewingAreaContainer>;
};
