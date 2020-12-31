import React from 'react'

import { createDirectory } from '../../utils/file-system-utils';

import { TextInput } from '../TextInput'
import { useState } from 'react';
import { FormBox } from '../FormBox';
import { SubmitButton } from '../SubmitButton';

interface props {
    directoryHandle: FileSystemDirectoryHandle,
    setCreateDirectoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DirectoryCreator: React.FC<props> = ({
    directoryHandle,
    setCreateDirectoryModalOpen
}) => { 
    const [directoryName, setDirectoryName] = useState("")

    const cleanup = () => {
        setCreateDirectoryModalOpen(false)
    }

    const handleCreateDirectory = () => {
        if (directoryName){
            createDirectory(directoryHandle, directoryName)
            cleanup()    
        }
    }

    return (
        <FormBox >
            <p>
                Add new directory to "{directoryHandle.name}"
            </p>
            <TextInput
                label="New Directory Name"
                name="directory-name"
                text={directoryName}
                setText={setDirectoryName}
                onPressEnter={handleCreateDirectory}
                stealFocus
            />
            <SubmitButton
                onClick={handleCreateDirectory}
            >
                Create
            </SubmitButton>
        </FormBox>
    )
}