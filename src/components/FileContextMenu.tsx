import React, { useState } from 'react'
import {
    Menu,
    Item,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { HighlightedService } from '../services/HighlightedService';
import { FILE_MENU_ID } from './directoryContents/enums';

enum Actions {
    EditAstTest = "edit-ast-test",
    Properties = "properties"
} 

export const FileContextMenu = () => {
    const [ , setFileHandle ] = useState<FileSystemFileHandle | undefined>(undefined)

    const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
        console.log({event, props, triggerEvent, data, action} );
        const fileHandle: FileSystemFileHandle = props?.fileHandle; // passed from ItemMenu.tsx
        
        setFileHandle(fileHandle)

        if(action === Actions.EditAstTest) {
            debugger;
        } else if(action === Actions.Properties) {
            debugger;
        }
    }

    const onCloseMenu = () => {
        HighlightedService.clearItem()
    }
    
    return (
        <>
            <Menu id={FILE_MENU_ID} onHidden={onCloseMenu}>
                {/* <Item onClick={(obj) => handleItemClick({...obj, action: Actions.EditAstTest})}>
                    Edit AST test
                </Item> */}
                <Item onClick={(obj) => handleItemClick({...obj, action: Actions.Properties})}>
                    Properties
                </Item>
            </Menu>
        </>
    )
}