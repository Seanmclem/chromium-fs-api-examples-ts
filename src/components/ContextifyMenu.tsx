import React, { useState } from 'react'
import {
    Menu,
    Item,
    Separator,
    Submenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

import { createDirectory } from '../utils/file-system-utils';

import { TextInput } from 'ready-fields'
import styled from 'styled-components'
import { ModalReady } from './ModalReady';



const MENU_ID = "menu-id";

enum Actions {
    NewFolder = "new-folder",
    NewFile = "new-file",
} 

interface DirectoryCreation {
    modalOpen: boolean;
    folderHandle?: FileSystemDirectoryHandle;
    // refreshfunction?: (handle: FileSystemDirectoryHandle) => void
}
const initialDirectoryCreation = {modalOpen: false, folderHandle: undefined}

export const ContextifyMenu = () => {
    const [directoryCreation, setDirectoryCreation] = useState<DirectoryCreation>(initialDirectoryCreation)
    const [folderNameText, setFolderNameText] = useState("")
    // const [isFileModalOpen, setIsFileModalOpen] = useState(false)

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
        setFolderNameText("")
        setDirectoryCreation(initialDirectoryCreation)
    }

    const handleCreateDirectory = (newName: string, detinationFolderHandle?: FileSystemDirectoryHandle) => {
        if(detinationFolderHandle){
            createDirectory(detinationFolderHandle, newName)
            onCloseDirectoryModal()    
        }
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
                    <p>
                        Add new folder to "{directoryCreation.folderHandle?.name}"
                    </p>
                    <TextInput label="New Folder Name" name="folder-name" text={folderNameText} setText={setFolderNameText} />
                    <button
                        onClick={() => handleCreateDirectory(folderNameText, directoryCreation.folderHandle)}
                    >
                        Create
                    </button>
                </ModalReady>
            )}
        </>

    )
}