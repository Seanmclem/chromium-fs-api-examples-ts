import React, { useState } from 'react'

import { createFileInDirectory } from '../../utils/file-system-utils';
import { FormBox } from '../FormBox';
import { SubmitButton } from '../SubmitButton';

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

    const handleCreateFile = async  () => {
        if(fileNameText){
            await createFileInDirectory(directoryHandle, fileNameText)
            cleanup()    
        }
    }

    return (
        <FormBox>
            <p>
                Add new file to "{directoryHandle.name}"
            </p>
            <TextInput
                label="New File Name and extension"
                name="file-name"
                text={fileNameText}
                setText={setfileNameText}
                onPressEnter={handleCreateFile} // this? here
                stealFocus
            />
            <SubmitButton
                onClick={handleCreateFile}
            >
                Create
            </SubmitButton>
        </FormBox>
    )
}