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

export const ContextifyMenu = () => {
    const [ directoryHandle, setDirectoryHandle ] = useState<FileSystemDirectoryHandle | undefined>(undefined)
    const [ createFileModalOpen, setCreateFileModalOpen ] = useState<boolean>(false)
    const [ createDirectoryModalOpen, setCreateDirectoryModalOpen ] = useState<boolean>(false)


    const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
        console.log({event, props, triggerEvent, data, action} );
        const folderHandle: FileSystemDirectoryHandle = props?.folderHandle; // passed from ItemMenu.tsx
        
        setDirectoryHandle(folderHandle)

        if(action === Actions.NewFolder) {
            setCreateDirectoryModalOpen(true)
        }
        else if(action === Actions.NewFile) {
            setCreateFileModalOpen(true)
        }
    }

    const onCloseModal = () => {
        setDirectoryHandle(undefined)
        setCreateFileModalOpen(false)
        setCreateDirectoryModalOpen(false)
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
            
            { (createDirectoryModalOpen && directoryHandle) && (
                <ModalReady onCloseModal={onCloseModal}>
                    <DirectoryCreator 
                        directoryHandle={directoryHandle}
                        setCreateDirectoryModalOpen={setCreateDirectoryModalOpen}
                    />
                </ModalReady>
            )}

            { (createFileModalOpen && directoryHandle) && (
                <ModalReady onCloseModal={onCloseModal}>
                    <FileCreator 
                        directoryHandle={directoryHandle}
                        setCreateFileModalOpen={setCreateFileModalOpen}
                    />
                </ModalReady>
            )}
        </>

    )
}