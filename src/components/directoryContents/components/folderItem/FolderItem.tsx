import React, { useState } from 'react'
import './FolderItem.scss'
import { FolderIcon } from './components/folderIcon/FolderIcon'
import { ChildItems } from './components/childItems/ChildItems'

export const FolderItem: React.FC<{entry: FileSystemDirectoryHandle}> = ({ entry }) => {
    const [open, setOpen] = useState(false)

    const handleMenuClick = (e: any) => {
        debugger;
        e.stopPropagation();
        debugger;
        e.preventDefault()
    }

    return (
        <div className="folder-item-conatiner">
            <div className="folder-item" key={entry.name} onClick={() => setOpen(!open)}>
                <FolderIcon open={open} />
                <div className="folder-name-button">
                    <div>{entry.name}</div>
                    <div className="item-folder-menu" onClick={(e) => { handleMenuClick(e) }}>
                        (...)
                    </div>
                    {/* ^^ can maybe move this out by overlaying it and having a pointer-events: none everywhere but on the (...) That would work */}
                </div>

            </div>

            <ChildItems parent={entry} show={open} />

        </div>

    )
}
