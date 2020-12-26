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
import { FileCreator } from './modals/FileCreator';



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

export interface FileCreation {
    modalOpen: boolean;
    folderHandle?: FileSystemDirectoryHandle;
}
const initialFileCreation = {modalOpen: false, folderHandle: undefined}

export const ContextifyMenu = () => {
    const [directoryCreation, setDirectoryCreation] = useState<DirectoryCreation>(initialDirectoryCreation)
    const [fileCreation, setFileCreation] = useState<FileCreation>(initialFileCreation)

    const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
        console.log({event, props, triggerEvent, data, action} );
        const folderHandle: FileSystemDirectoryHandle = props?.folderHandle; // passed from ItemMenu.tsx
        
        if(action === Actions.NewFolder) {
            setDirectoryCreation({modalOpen: true, folderHandle})
        }
        else if(action === Actions.NewFile) {
            setFileCreation({modalOpen: true, folderHandle})
        }
    }

    const onCloseModal = () => {
        setDirectoryCreation(initialDirectoryCreation)
        setFileCreation(initialFileCreation)
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
                <ModalReady onCloseModal={onCloseModal}>
                    <DirectoryCreator 
                        directoryCreation={directoryCreation}
                        setDirectoryCreation={setDirectoryCreation}
                    />
                </ModalReady>
            )}

            { fileCreation.modalOpen && (
                <ModalReady onCloseModal={onCloseModal}>
                    <FileCreator 
                        fileCreation={fileCreation}
                        setFileCreation={setFileCreation}
                    />
                </ModalReady>
            )}
        </>

    )
}