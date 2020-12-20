import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import styled from 'styled-components'

const CloseButton = styled.div`
    position: absolute;
    right: -20px;
    top: 48%;
    z-index: 10;
`

export const HideDrawerBtn: React.FC<any> = ({onClick}) => {

    return (
        <CloseButton onClick={onClick}>
            <MdKeyboardArrowLeft size="20px" />
        </CloseButton>
    )
}