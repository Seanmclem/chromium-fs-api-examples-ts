import React from 'react'

import { createDirectory } from '../../utils/file-system-utils';

import { TextInput } from '../TextInput'
import { useState } from 'react';
import { FormBox } from '../FormBox';
import { SubmitButton } from '../SubmitButton';

interface props {
    directoryHandle: FileSystemDirectoryHandle,
    setCreateDirectoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refreshFileSystem: () => void,
}

export const DirectoryCreator: React.FC<props> = ({
    directoryHandle,
    setCreateDirectoryModalOpen,
    refreshFileSystem
}) => {
    const [directoryName, setDirectoryName] = useState("")

    const cleanup = () => {
        setCreateDirectoryModalOpen(false)
    }

    const handleCreateDirectory = async () => {
        if (directoryName){
            await createDirectory(directoryHandle, directoryName)
            await refreshFileSystem() //TODO: type as promise
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