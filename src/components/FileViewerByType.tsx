import React from 'react'
import { getFileExtensionFromHandle } from '../utils/filetype-utils'
import { TextFileViewer } from './FileViewers/TextFileViewer'

interface props {
    fileHandle: FileSystemFileHandle;
}

export const FileViewerByType: React.FC<props> = ({fileHandle}) => {
    const type = getFileExtensionFromHandle(fileHandle)

    if(type === 'text'){
        return <TextFileViewer fileHandle={fileHandle} />
    }
    return <div>no file yet</div>
}