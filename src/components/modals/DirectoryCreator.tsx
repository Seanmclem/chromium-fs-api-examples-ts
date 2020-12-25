import React from 'react'

import { createDirectory } from '../../utils/file-system-utils';

import { TextInput } from 'ready-fields'
import { useState } from 'react';
import { DirectoryCreation } from '../ContextifyMenu';

interface props {
    directoryCreation: DirectoryCreation,
    setDirectoryCreation: React.Dispatch<React.SetStateAction<DirectoryCreation>>
}

const initialDirectoryCreation = {modalOpen: false, folderHandle: undefined}

export const DirectoryCreator: React.FC<props> = ({
    directoryCreation,
    setDirectoryCreation
}) => {

    const [folderNameText, setFolderNameText] = useState("")

    const onCloseDirectoryModal = () => {
        setDirectoryCreation(initialDirectoryCreation)
    }

    const handleCreateDirectory = (newName: string, detinationFolderHandle?: FileSystemDirectoryHandle) => {
        if(detinationFolderHandle){
            createDirectory(detinationFolderHandle, newName)
            onCloseDirectoryModal()    
        }
    }

    return (
        <div>
            <p>
                Add new folder to "{directoryCreation.folderHandle?.name}"
            </p>
            <TextInput
                label="New Folder Name"
                name="folder-name"
                text={folderNameText}
                setText={setFolderNameText}
            />
            <button
                onClick={() => handleCreateDirectory(folderNameText, directoryCreation.folderHandle)}
            >
                Create
            </button>
        </div>
    )
}