import React from 'react'
import './FileItem.scss'
import { FileIcon } from './components/fileIcon/FileIcon'

interface Props {
    entry:FileSystemFileHandle,
    handleSelectFile?: any
}

export const FileItem: React.FC<Props> = ({ entry, handleSelectFile }) => {
    const handleSelectFileDefault = (file:FileSystemFileHandle) => {
        console.log({file})
    }

    return (
        <div className="file-item"
            key={entry.name}
            onClick={() => handleSelectFile ? handleSelectFile(entry) : handleSelectFileDefault(entry)}
        >
            <FileIcon filename={entry.name} />
            <div>{entry.name}</div>
        </div>
    )
}
