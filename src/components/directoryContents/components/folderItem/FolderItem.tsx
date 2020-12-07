import React, { useState } from 'react'
import './FolderItem.scss'
import { FolderIcon } from './components/folderIcon/FolderIcon'
import { ChildItems } from './components/childItems/ChildItems'
import { ItemMenu } from '../ItemMenu'

interface Props {
    entry: FileSystemDirectoryHandle,
    handleSelectFile?: any
}

export const FolderItem: React.FC<Props> = ({ entry, handleSelectFile }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="folder-item-conatiner">
            <div className="folder-item" key={entry.name} onClick={() => setOpen(!open)}>
                <FolderIcon open={open} />
                <div className="folder-name-button">
                    <div>{entry.name}</div>
                    <ItemMenu />
                </div>
            </div>

            <ChildItems
                parent={entry}
                show={open}
                handleSelectFile={handleSelectFile}
            />
        </div>
    )
}
