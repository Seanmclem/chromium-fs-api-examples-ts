import React, { useState } from 'react'
import './FileItem.scss'
import { FileIcon } from './components/fileIcon/FileIcon'
import { useContextMenu } from 'react-contexify'
import { FILE_MENU_ID } from '../../enums'

interface Props {
    entry:FileSystemFileHandle, 
    handleSelectFile?: any,
    dirPath?: string
}

export const FileItem: React.FC<Props> = ({ entry: fileHandle, handleSelectFile, dirPath }) => {
    const [specificPath] = useState(`${dirPath}/${fileHandle.name}`)
    const depth = (dirPath?.split("/").length || 0) - 1 || 0;  

    const { show: showContextMenu } = useContextMenu({ id: FILE_MENU_ID });
    const handleRigthClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        showContextMenu(event, {id: FILE_MENU_ID, props: {fileHandle}})
        // setContextHighlightFolder({path: specificPath, folderHandle})
        // just use rxjs at some point
    }

    console.log(fileHandle.name,specificPath)
    const handleSelectFileDefault = (file:FileSystemFileHandle) => {
        console.log({file})
    }

    return (
        <div className="file-item"
            key={fileHandle.name}
            onClick={() => handleSelectFile ? handleSelectFile(fileHandle) : handleSelectFileDefault(fileHandle)}
            style={{
                paddingLeft: `${depth * 15}px`,
                paddingRight: `${depth * 15}px`
            }}
            onContextMenu={handleRigthClick}
        >
            <FileIcon filename={fileHandle.name} />
            <div>{fileHandle.name}</div>
        </div>
    )
}
