import React, { useState } from 'react'

import { createFileInDirectory } from '../../utils/file-system-utils';

import { TextInput } from '../TextInput'

interface props {
    directoryHandle: FileSystemDirectoryHandle,
    setCreateFileModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const FileCreator: React.FC<props> = ({
    directoryHandle,
    setCreateFileModalOpen
}) => { 
    const [fileNameText, setfileNameText] = useState("")

    const cleanup = () => {
        setCreateFileModalOpen(false)
    }

    const handleCreateDirectory = async (newName: string, detinationFolderHandle: FileSystemDirectoryHandle) => {
        if(fileNameText){
            await createFileInDirectory(detinationFolderHandle, newName)
            cleanup()    
        }
    }

    return (
        <div>
            <p>
                Add new file to "{directoryHandle.name}"
            </p>
            <TextInput
                label="New File Name and extension"
                name="file-name"
                text={fileNameText}
                setText={setfileNameText}
                stealFocus
            />
            <button
                onClick={() => handleCreateDirectory(fileNameText, directoryHandle)}
            >
                Create
            </button>
        </div>
    )
}