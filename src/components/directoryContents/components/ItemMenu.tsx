import React from 'react'
import styled from 'styled-components'

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

export const ItemMenu = () => {
    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        debugger
    }

    return (
        <div className="item-menu" onClick={handleMenuClick}>
            (...)
        </div>
    )
}