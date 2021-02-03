import React, { useEffect, useState } from 'react'
import './FileItem.scss'
import { FileIcon } from './components/fileIcon/FileIcon'
import { useContextMenu } from 'react-contexify'
import { FILE_MENU_ID } from '../../enums'
import { HighlightedService } from '../../../../services/HighlightedService'

interface Props {
    entry:FileSystemFileHandle, 
    handleSelectFile?: any,
    dirPath?: string
}

export const FileItem: React.FC<Props> = ({ entry: fileHandle, handleSelectFile, dirPath }) => {
    const [specificPath] = useState(`${dirPath}/${fileHandle.name}`)

    const [isHighlighted, setIsHighlighted] = useState(false)
    const [subscription, setSubscription] = useState<any | undefined>(undefined)
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

    const depth = (dirPath?.split("/").length || 0) - 1 || 0;  

    const { show: showContextMenu } = useContextMenu({ id: FILE_MENU_ID });
    const handleRigthClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        showContextMenu(event, {id: FILE_MENU_ID, props: {fileHandle}})
        subscribeHighlightFolder()
        HighlightedService.setItem({path: specificPath, handle: fileHandle})
    }

    console.log(fileHandle.name,specificPath)
    const handleSelectFileDefault = (file:FileSystemFileHandle) => {
        console.log({file})
    }

    return (
        <div className={`file-item ${isHighlighted ? 'context-click' : ''}`}
            key={fileHandle.name}
            onClick={() => handleSelectFile ? handleSelectFile(fileHandle) : handleSelectFileDefault(fileHandle)}
            style={{
                paddingLeft: `${depth * 15}px`,
                paddingRight: `${depth * 15}px`
            }}
            onContextMenu={handleRigthClick}
        >
            <FileIcon filename={fileHandle.name} />
            <div>{fileHandle.name}</div>
        </div>
    )
}
