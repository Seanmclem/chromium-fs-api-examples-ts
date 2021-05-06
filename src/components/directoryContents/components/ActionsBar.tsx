import React, { Dispatch, SetStateAction, useCallback } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdRefresh } from "react-icons/md";
import ReactTooltip from "react-tooltip";

const ActionsBarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: auto;
  height: 25px;
  background-color: rgba(240, 255, 255, 1);
  /* border-bottom: 1px solid #d4d4d4; */
  box-shadow: 0px 0px 4px 0px #d4d4d4;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

interface props {
  refreshFileSystem: () => void;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

export const ActionsBar: React.FC<props> = ({
  refreshFileSystem,
  setDrawerOpen,
}) => {
  const handleRefreshRoot = () => {
    refreshFileSystem();
  };

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <ActionsBarContainer>
      <MdRefresh
        size="20px"
        style={{ cursor: "pointer" }}
        onClick={handleRefreshRoot}
        data-tip="refresh root directory"
        data-delay-show="400"
      />
      <MdKeyboardArrowLeft
        size="20px"
        style={{ cursor: "pointer" }}
        onClick={closeDrawer}
        data-tip="collapse panel"
        data-delay-show="400"
      />
      <ReactTooltip />
    </ActionsBarContainer>
  );
};
