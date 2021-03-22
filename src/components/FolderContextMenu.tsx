import React, { useState } from 'react'
import {
    Menu,
    Item,
    Separator,
    Submenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { FOLDER_MENU_ID } from './directoryContents/enums';

import { ModalReady } from './ModalReady';
import { DirectoryCreator } from './modals/DirectoryCreator';
import { FileCreator } from './modals/FileCreator';
import { HighlightedService } from '../services/HighlightedService';

enum Actions {
    NewFolder = "new-folder",
    NewFile = "new-file",
}

interface props {
    refreshFileSystem: () => void,
}

export const FolderContextMenu: React.VFC<props> = ({ refreshFileSystem }) => {
    const [ directoryHandle, setDirectoryHandle ] = useState<FileSystemDirectoryHandle | undefined>(undefined)

    const [ createFileModalOpen, setCreateFileModalOpen ] = useState<boolean>(false)
    const [ createDirectoryModalOpen, setCreateDirectoryModalOpen ] = useState<boolean>(false)

    const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
        console.log({event, props, triggerEvent, data, action} );
        const folderHandle: FileSystemDirectoryHandle = props?.folderHandle; // passed from FolderItem.tsx
        const forceReRenderParent: () => void = props?.forceUpdate; // passed from FolderItem.tsx
        // ^ set in zustand

        setDirectoryHandle(folderHandle)

        if(action === Actions.NewFolder) {
            setCreateDirectoryModalOpen(true)
        }
        else if(action === Actions.NewFile) {
            setCreateFileModalOpen(true)
        }
    }

    const onCloseMenu = () => {
        HighlightedService.clearItem()
        // ^ unset forceReRenderParent in zustand
    }

    const onCloseModal = () => {
        setDirectoryHandle(undefined)
        setCreateFileModalOpen(false)
        setCreateDirectoryModalOpen(false)
    }
    
    return (
        <>
            <Menu id={FOLDER_MENU_ID} onHidden={onCloseMenu}>
                <Item onClick={(obj) => handleItemClick({...obj, action: Actions.NewFolder})}>
                    New Directory
                </Item>
                <Item onClick={(obj) => handleItemClick({...obj, action: Actions.NewFile})}>
                    New File
                </Item>
                {/* <Separator />
                <Item disabled>Disabled</Item>
                <Separator />
                <Submenu label="Submenu">
                <Item onClick={handleItemClick}>
                    Sub Item 1
                </Item>
                <Item onClick={handleItemClick}>Sub Item 2</Item>
                </Submenu> */}
            </Menu>
            
            { (createDirectoryModalOpen && directoryHandle) && (
                <ModalReady onCloseModal={onCloseModal}>
                    <DirectoryCreator 
                        directoryHandle={directoryHandle}
                        setCreateDirectoryModalOpen={setCreateDirectoryModalOpen}
                        refreshFileSystem={refreshFileSystem}
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