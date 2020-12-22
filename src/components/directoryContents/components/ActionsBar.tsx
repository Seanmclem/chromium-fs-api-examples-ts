import React from 'react'
import styled from 'styled-components'
import { MdRefresh } from 'react-icons/md'

const ActionsBarContainer = styled.div`
    width: auto;
    height: 25px;
    background-color: lightgray;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
`

export const ActionsBar = ({rootHandle, setupFileSystem}:any) => {

    const refreshRoot = () => {
        setupFileSystem(rootHandle)
    }

    return (
        <ActionsBarContainer>
            <MdRefresh size="20px" style={{cursor: 'pointer'}} onClick={refreshRoot}/>
        </ActionsBarContainer>
    )
}