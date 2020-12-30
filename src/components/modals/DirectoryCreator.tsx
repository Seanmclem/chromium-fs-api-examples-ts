import React from 'react'

import { createDirectory } from '../../utils/file-system-utils';

import { TextInput } from '../TextInput'
import { useState } from 'react';

interface props {
    directoryHandle: FileSystemDirectoryHandle,
    setCreateDirectoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DirectoryCreator: React.FC<props> = ({
    directoryHandle,
    setCreateDirectoryModalOpen
}) => { 
    const [directoryName, setDirectoryName] = useState("")

    const onCloseDirectoryModal = () => {
        setCreateDirectoryModalOpen(false)
    }

    const handleCreateDirectory = (newName: string, detinationDirectoryHandle: FileSystemDirectoryHandle) => {
        if (directoryName){
            createDirectory(detinationDirectoryHandle, newName)
            onCloseDirectoryModal()    
        }
    }

    return (
        <div>
            <p>
                Add new directory to "{directoryHandle.name}"
            </p>
            <TextInput
                label="New Directory Name"
                name="directory-name"
                text={directoryName}
                setText={setDirectoryName}
                stealFocus
            />
            <button
                onClick={() => handleCreateDirectory(directoryName, directoryHandle)}
            >
                Create
            </button>
        </div>
    )
}