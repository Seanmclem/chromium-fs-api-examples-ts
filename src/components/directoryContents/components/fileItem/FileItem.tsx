import React from 'react'
import './FileItem.scss'
import { FileIcon } from './components/fileIcon/FileIcon'
// import { FilesContext } from '../../../../context/FilesContext'

export const FileItem: React.FC<{entry:FileSystemFileHandle}> = ({ entry }) => {
    //const { addFiles } = useContext(FilesContext)
    const addFiles = (file:any) => {
        debugger
        console.log({file})
    }

    return (
        <div className="file-item" key={entry.name} onClick={() => addFiles(entry)}>
            <FileIcon filename={entry.name} />
            <div>{entry.name}</div>
        </div>
    )
}
