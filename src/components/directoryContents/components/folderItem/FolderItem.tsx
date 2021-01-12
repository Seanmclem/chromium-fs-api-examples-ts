import React, { useEffect, useState } from 'react'
import './FolderItem.scss'
import { FolderIcon } from './components/folderIcon/FolderIcon'
import { ChildItems } from './components/childItems/ChildItems'
import { useContextMenu } from 'react-contexify'
import { MENU_ID } from '../../enums'

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
    const { show } = useContextMenu({ id: MENU_ID });
    const setContextHighlightFolder = useTodoStore(state => state.setContextHighlightFolder)
    const contextHighlightFolder = useTodoStore(state => state.contextHighlightedFolder)

    useEffect(()=>console.log('rerender'))

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        show(event, {id: MENU_ID, props: {folderHandle}})
        setContextHighlightFolder({path: specificPath, folderHandle})
        //need to add callback here...?
    }

    return (
        <div className="folder-item-conatiner">
            <div
                className={`folder-item ${contextHighlightFolder?.path === specificPath ? 'context-click' : ''}`}
                data-test={dirPath}
                key={folderHandle.name} onClick={() => setOpen(!open)}
                style={{
                    paddingLeft: `${depth * 15}px`,
                    paddingRight: `${depth * 15}px`,
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
