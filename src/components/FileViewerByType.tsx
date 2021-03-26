import React from 'react'
import { getFileTypeFromHandle } from '../utils/filetype-utils'
import { ImageFileViewer } from './FileViewers/ImageFileViewer'
import { TextFileViewer } from './FileViewers/TextFileViewer'
import { VideoFileViewer } from './FileViewers/VideoFileViewer'

interface props {
    fileHandle?: FileSystemFileHandle;
}

export const FileViewerByType: React.FC<props> = ({fileHandle}) => {
    if(fileHandle){
        const type = getFileTypeFromHandle  (fileHandle)

        if(type === 'image'){
            return <ImageFileViewer fileHandle={fileHandle} />
        }
        else if(type === 'video'){
            return <VideoFileViewer fileHandle={fileHandle} />
        }
        else if(type === 'text'){
            return <TextFileViewer fileHandle={fileHandle} />
        }
        return <div>file type not recognized</div>
    } else {
        return null
    }
}