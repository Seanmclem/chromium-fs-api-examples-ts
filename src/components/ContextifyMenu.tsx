import React, { useState } from 'react'
import {
    Menu,
    Item,
    Separator,
    Submenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { TextInput } from 'ready-fields'

import styled from 'styled-components'
import { createDirectory } from '../utils/file-system-utils';

const ModalBackdrop = styled.div`
  /* display: none;  */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`


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

    const preventCloseModal = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
    }

    const doCreating = (
        {folderHandle, newName, refreshFunction}
        :{folderHandle?: FileSystemDirectoryHandle, newName?: string, refreshFunction?: (handle: FileSystemDirectoryHandle) => void}
    ) => {
        debugger;
        if(folderHandle && newName){
            createDirectory(folderHandle, newName)
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
        
        {directoryCreation.modalOpen && (
            <ModalBackdrop id="toots" onClick={onCloseDirectoryModal}>
                <ModalBody onClick={preventCloseModal}>
                    <p>
                        Add new folder to "{directoryCreation.folderHandle?.name}"
                    </p>
                    <TextInput label="New Folder Name" name="folder-name" text={folderNameText} setText={setFolderNameText} />
                    <button
                        onClick={() => doCreating({folderHandle: directoryCreation.folderHandle, newName: folderNameText })}
                    >
                        Create
                    </button>
                </ModalBody>
            </ModalBackdrop>
        )}
        
        </>

    )
}