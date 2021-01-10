import React, { useState } from 'react'
import './FileItem.scss'
import { FileIcon } from './components/fileIcon/FileIcon'

interface Props {
    entry:FileSystemFileHandle,
    handleSelectFile?: any,
    dirPath?: string
}

export const FileItem: React.FC<Props> = ({ entry, handleSelectFile, dirPath }) => {
    const [filePath] = useState(`${dirPath}/${entry.name}`)
    console.log(entry.name,filePath)
    const handleSelectFileDefault = (file:FileSystemFileHandle) => {
        console.log({file})
    }
    const depth = (dirPath?.split("/").length || 0) - 1 || 0;  

    return (
        <div className="file-item"
            key={entry.name}
            onClick={() => handleSelectFile ? handleSelectFile(entry) : handleSelectFileDefault(entry)}
            style={{
                paddingLeft: `${depth * 15}px`,
                paddingRight: `${depth * 15}px`
            }}
        >
            <FileIcon filename={entry.name} />
            <div>{entry.name}</div>
        </div>
    )
}
