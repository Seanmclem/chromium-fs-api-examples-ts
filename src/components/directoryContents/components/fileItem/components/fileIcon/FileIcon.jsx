import React from 'react'
import './FileIcon.scss'
import { getIconForFile } from 'vscode-icons-js'
// import { getIconForFile } from '/'
export const FileIcon = ({ filename }) => {
    return (
        <div className={`file-icon-container`}>
            <img src={`./assets/icons/${getIconForFile(filename)}`}
                alt="file"></img>
        </div>
    )
}
