import React, { useState } from 'react'
import {
    Menu,
    Item,
    Separator,
    Submenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";


import styled from 'styled-components'
import { ModalReady } from './ModalReady';
import { DirectoryCreator } from './modals/DirectoryCreator';



const MENU_ID = "menu-id";

enum Actions {
    NewFolder = "new-folder",
    NewFile = "new-file",
} 

export interface DirectoryCreation {
    modalOpen: boolean;
    folderHandle?: FileSystemDirectoryHandle;
}
const initialDirectoryCreation = {modalOpen: false, folderHandle: undefined}

export const ContextifyMenu = () => {
    const [directoryCreation, setDirectoryCreation] = useState<DirectoryCreation>(initialDirectoryCreation)

    const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
        console.log({event, props, triggerEvent, data, action} );
        const folderHandle: FileSystemDirectoryHandle = props?.folderHandle; // passed from ItemMenu.tsx
        
        if(action === Actions.NewFolder) {
            setDirectoryCreation({modalOpen: true, folderHandle})
        }
        else if(action === Actions.NewFile) {

        }
    }

    const onCloseDirectoryModal = () => {
        setDirectoryCreation(initialDirectoryCreation)
    }


    
    return (
        <>
            <Menu id={MENU_ID}>
                <Item onClick={(obj) => handleItemClick({...obj, action: Actions.NewFolder})}>
                    New Directory
                </Item>
                <Item onClick={(obj) => handleItemClick({...obj, action: Actions.NewFile})}>
                    New File
                </Item>
                <Separator />
                <Item disabled>Disabled</Item>
                <Separator />
                <Submenu label="Submenu">
                <Item onClick={handleItemClick}>
                    Sub Item 1
                </Item>
                <Item onClick={handleItemClick}>Sub Item 2</Item>
                </Submenu>
            </Menu>
            
            { directoryCreation.modalOpen && (
                <ModalReady onCloseModal={onCloseDirectoryModal}>
                    <DirectoryCreator 
                        directoryCreation={directoryCreation}
                        setDirectoryCreation={setDirectoryCreation}
                    />
                </ModalReady>
            )}
        </>

    )
}