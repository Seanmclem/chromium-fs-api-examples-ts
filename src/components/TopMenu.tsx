import React from 'react'
import styled from 'styled-components'
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';

import '@szhsin/react-menu/dist/index.css';
import { useHistory } from 'react-router-dom';

const TopMenuContainer = styled.div`
    height: 5%;
    border: 2px solid darkgray;
`

interface props {
    setAltRootHandle?: any;
}

export const TopMenu: React.FC<props> = ({setAltRootHandle}) => {
    const history = useHistory();
    
    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        setAltRootHandle(handle)
    }

    const goToAstTools = () => history.push('/ast-tools')
    
    return (
        <TopMenuContainer>
            <Menu menuButton={
                <MenuButton>File</MenuButton>
            }>
                <MenuItem onClick={showFolderPicker}>
                    Open new root folder
                </MenuItem>
            </Menu>
            <Menu menuButton={
                <MenuButton>Go To</MenuButton>
            }>
                <MenuItem onClick={goToAstTools}>
                    AST Tools
                </MenuItem>
            </Menu>
        </TopMenuContainer>
    )
}