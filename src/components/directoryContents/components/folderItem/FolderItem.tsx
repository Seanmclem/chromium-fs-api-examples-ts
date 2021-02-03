import React, { useEffect, useState } from 'react'
import './FolderItem.scss'
import { FolderIcon } from './components/folderIcon/FolderIcon'
import { ChildItems } from './components/childItems/ChildItems'
import { useContextMenu } from 'react-contexify'
import { FOLDER_MENU_ID } from '../../enums'

import { useTodoStore } from '../../../../stores/selectedStore';
import { HighlightedService } from '../../../../services/HighlightedService'


interface Props {
    entry: FileSystemDirectoryHandle,
    handleSelectFile?: any,
    dirPath?: string
}

export const FolderItem: React.FC<Props> = ({ entry: folderHandle, handleSelectFile, dirPath }) => {
    const [open, setOpen] = useState(false)
    const [isHighlighted, setIsHighlighted] = useState(false)
    const [subscription, setSubscription] = useState<any | undefined>(undefined)

    const [specificPath] = useState(`${dirPath}/${folderHandle.name}`)
    const depth = (dirPath?.split("/").length || 0) - 1 || 0;  

    const { show: showContextMenu } = useContextMenu({ id: FOLDER_MENU_ID });

    useEffect(()=>console.log('rerender'))

    useEffect(() => {
        return unsubscribe()
    }, [])

    const unsubscribe = () => {
        if(subscription){
            subscription.unsubscribe()
            setSubscription(undefined)
        }
    }

    const subscribeHighlightFolder = () => {
        const sub = HighlightedService.getItem().subscribe((folder) => {
            if (folder?.path === specificPath) {
                setIsHighlighted(true)
            } else {
                setIsHighlighted(false)
                unsubscribe()
            }
        });
        setSubscription(sub)
    }

    const handleRigthClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        showContextMenu(event, {id: FOLDER_MENU_ID, props: {folderHandle}})
        subscribeHighlightFolder()
        HighlightedService.setItem({path: specificPath, handle: folderHandle})
    }

    return (
        <div className="folder-item-conatiner">
            <div
                className={`folder-item ${isHighlighted ? 'context-click' : ''}`}
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
