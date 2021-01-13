import React, { useEffect, useState } from 'react'
import './FolderItem.scss'
import { FolderIcon } from './components/folderIcon/FolderIcon'
import { ChildItems } from './components/childItems/ChildItems'
import { useContextMenu } from 'react-contexify'
import { FOLDER_MENU_ID } from '../../enums'

import { useTodoStore } from '../../../../stores/selectedStore';


interface Props {
    entry: FileSystemDirectoryHandle,
    handleSelectFile?: any,
    dirPath?: string
}

export const FolderItem: React.FC<Props> = ({ entry: folderHandle, handleSelectFile, dirPath }) => {
    const [open, setOpen] = useState(false)

    const [specificPath] = useState(`${dirPath}/${folderHandle.name}`)
    const depth = (dirPath?.split("/").length || 0) - 1 || 0;  

    const { show: showContextMenu } = useContextMenu({ id: FOLDER_MENU_ID });
    const setContextHighlightFolder = useTodoStore(state => state.setContextHighlightFolder)
    const contextHighlightFolder = useTodoStore(state => state.contextHighlightedFolder)

    useEffect(()=>console.log('rerender'))

    const handleRigthClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        showContextMenu(event, {id: FOLDER_MENU_ID, props: {folderHandle}})
        setContextHighlightFolder({path: specificPath, folderHandle})
        // just use rxjs at some point
    }

    return (
        <div className="folder-item-conatiner">
            <div
                className={`folder-item ${contextHighlightFolder?.path === specificPath ? 'context-click' : ''}`}
                data-path={specificPath}
                key={folderHandle.name} onClick={() => setOpen(!open)}
                style={{
                    paddingLeft: `${depth * 15}px`,
                    paddingRight: `${depth * 15}px`,
                }}
                onContextMenu={handleRigthClick}
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
