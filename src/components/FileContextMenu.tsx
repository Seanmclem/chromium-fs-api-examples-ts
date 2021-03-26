import React, { useState } from 'react'
import {
    Menu,
    Item,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { HighlightedService } from '../services/HighlightedService';
import { FILE_MENU_ID } from './directoryContents/enums';
import { useToasts } from 'react-toast-notifications';
import { ModalReady } from './ModalReady';
import { Properties } from './modals/Properties';

enum Actions {
    EditAstTest = "edit-ast-test",
    Properties = "properties",
    DeleteFile = "delete-file"
}

interface props {
    refreshFileSystem: () => void,
}

export const FileContextMenu: React.VFC<props> = ({ refreshFileSystem }) => {
    const { addToast } = useToasts();
    const [ fileHandle, setFileHandle ] = useState<FileSystemFileHandle | undefined>(undefined)
    const [ propertiesModalOpen, setPropertiesModalOpen ] = useState<boolean>(false)

    const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
        console.log({event, props, triggerEvent, data, action} );
        const fileHandleProp: FileSystemFileHandle = props?.fileHandle; // passed from ItemMenu.tsx
        const parentDirecoryHandle: FileSystemDirectoryHandle = props?.parentHandle;
        
        setFileHandle(fileHandleProp) // why?

        if(action === Actions.EditAstTest) {
            debugger;
        } else if(action === Actions.Properties) {
            setPropertiesModalOpen(true)
        } else if(action === Actions.DeleteFile) {
            deleteFile({parentDirecoryHandle, fileHandleProp})
        }
    }

    const deleteFile = async ({parentDirecoryHandle, fileHandleProp}:
        {parentDirecoryHandle: FileSystemDirectoryHandle, fileHandleProp: FileSystemFileHandle}) => {
        try {
            await parentDirecoryHandle.requestPermission({ mode : "readwrite" })
            await fileHandleProp.requestPermission({ mode : "readwrite" })
            await parentDirecoryHandle.removeEntry(fileHandleProp.name)
            refreshFileSystem()
            addToast("Deleted file", { appearance: "success" })
        } catch(error) {
            console.error('Failed to delete file', error)
            addToast("Failed to delete file", { appearance: "error" })
        }
    }

    const onCloseMenu = () => {
        HighlightedService.clearItem()
    }

    const onCloseModal = () => {
        setFileHandle(undefined)
    }
    
    return (
        <>
            <Menu id={FILE_MENU_ID} onHidden={onCloseMenu}>
                {/* <Item onClick={(obj) => handleItemClick({...obj, action: Actions.EditAstTest})}>
                    Edit AST test
                </Item> */}
                <Item onClick={(obj) => handleItemClick({...obj, action: Actions.DeleteFile})}>
                    Delete
                </Item>
                <Item onClick={(obj) => handleItemClick({...obj, action: Actions.Properties})}>
                    Properties
                </Item>
            </Menu>

            { (propertiesModalOpen && fileHandle) && (
                <ModalReady onCloseModal={onCloseModal}>
                    <Properties 
                        fileHandle={fileHandle}
                        setModalOpen={setPropertiesModalOpen}
                    />
                </ModalReady>
            )}
        </>
    )
}