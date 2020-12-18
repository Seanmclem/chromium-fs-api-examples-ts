import React from 'react'
import styled from 'styled-components'
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';

import '@szhsin/react-menu/dist/index.css';

const FileMenuContainer = styled.div`
    height: 5%;
    border: 2px solid darkgray;
`

interface props {
    setAltRootHandle?: any;
}

export const FileMenu: React.FC<props> = ({setAltRootHandle}) => {
    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        setAltRootHandle(handle)
    }
    
    return (
        <FileMenuContainer>
            <Menu menuButton={<MenuButton>File</MenuButton>}>
                <MenuItem onClick={showFolderPicker}>
                    Open new root folder
                </MenuItem>
                {/* <MenuItem>New File</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>index.html</MenuItem>
                    <MenuItem>example.js</MenuItem>
                    <MenuItem>about.css</MenuItem>
                </SubMenu>
                <MenuItem>Save</MenuItem> */}
            </Menu>
        </FileMenuContainer>
    )
}