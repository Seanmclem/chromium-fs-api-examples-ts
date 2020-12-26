import React from 'react'

import { createFileInDirectory } from '../../utils/file-system-utils';

import { TextInput } from 'ready-fields'
import { useState } from 'react';
import { FileCreation } from '../ContextifyMenu';

interface props {
    fileCreation: FileCreation,
    setFileCreation: React.Dispatch<React.SetStateAction<FileCreation>>
}

const initialFileCreation = {modalOpen: false, folderHandle: undefined}

export const FileCreator: React.FC<props> = ({
    fileCreation,
    setFileCreation
}) => { 
    const [fileNameText, setfileNameText] = useState("")

    const cleanup = () => {
        setFileCreation(initialFileCreation)
    }

    const handleCreateDirectory = async (newName: string, detinationFolderHandle?: FileSystemDirectoryHandle) => {
        if(detinationFolderHandle){
            await createFileInDirectory(detinationFolderHandle, newName)
            cleanup()    
        }
    }

    return (
        <div>
            <p>
                Add new file to "{fileCreation.folderHandle?.name}"
            </p>
            <TextInput
                label="New File Name and extension"
                name="file-name"
                text={fileNameText}
                setText={setfileNameText}
            />
            <button
                onClick={() => handleCreateDirectory(fileNameText, fileCreation.folderHandle)}
            >
                Create
            </button>
        </div>
    )
}