import React from 'react'
import { useContextMenu } from 'react-contexify';
import styled from 'styled-components'

const MENU_ID = "menu-id";

const ItemMenuStyled = styled.div`
      width: 21px;
      margin-right: 20px;
      opacity: 0;
      pointer-events: none;

    &:hover {
        position: relative;
        z-index: 10;
        opacity: 1;
        pointer-events: initial;
    }
`

interface props {
    folderHandle?: FileSystemDirectoryHandle;
}

export const ItemMenu: React.FC<props> = ({folderHandle}) => {
    const { show } = useContextMenu({
        id: MENU_ID
    });

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        show(event, {id: MENU_ID, props: {folderHandle}})
    }

    return (
        <div className="item-menu" onClick={handleMenuClick}>
            (...)
        </div>
    )
}
