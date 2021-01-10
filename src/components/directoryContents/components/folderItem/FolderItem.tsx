import React, { useState } from 'react'
import './FolderItem.scss'
import { FolderIcon } from './components/folderIcon/FolderIcon'
import { ChildItems } from './components/childItems/ChildItems'
import { useContextMenu } from 'react-contexify'
import { MENU_ID } from '../../enums'

interface Props {
    entry: FileSystemDirectoryHandle,
    handleSelectFile?: any,
    dirPath?: string
}

export const FolderItem: React.FC<Props> = ({ entry: folderHandle, handleSelectFile, dirPath }) => {
    const [folderPath] = useState(`${dirPath}/${folderHandle.name}`)
    console.log(folderHandle.name, folderPath)
    const [open, setOpen] = useState(false)
    const depth = (dirPath?.split("/").length || 0) - 1 || 0;  

    const { show } = useContextMenu({ id: MENU_ID });
    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        show(event, {id: MENU_ID, props: {folderHandle}})
    }

    return (
        <div className="folder-item-conatiner">
            <div
                className="folder-item"
                key={folderHandle.name} onClick={() => setOpen(!open)}
                style={{
                    paddingLeft: `${depth * 15}px`,
                    paddingRight: `${depth * 15}px`
                }}
                onContextMenu={handleMenuClick}
            >
                <FolderIcon open={open} />
                <div className="folder-name-button">
                    <div>{folderHandle.name}</div>
                </div>
            </div>

            <ChildItems
                parent={folderHandle}
                show={open}
                handleSelectFile={handleSelectFile}
                dirPath={`${dirPath}/${folderHandle.name}`}
            />
        </div>
    )
}
