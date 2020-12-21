import React from 'react'
import {
    Menu,
    Item,
    Separator,
    Submenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
    console.log({event, props, triggerEvent, data, action} );
    const folderHandle: FileSystemDirectoryHandle = props?.folderHandle;
}

export const ContextifyMenu = () => {

    return (
        <Menu id={MENU_ID}>
            <Item onClick={(obj) => handleItemClick({...obj, action: "item-1"})}>
                Item 1
            </Item>
            <Item onClick={(obj) => handleItemClick({...obj, action: "item-2"})}>
                Item 2
            </Item>
            <Separator />
            <Item disabled>Disabled</Item>
            <Separator />
            <Submenu label="Submenu">
            <Item onClick={handleItemClick}>
                Sub Item 1
            </Item>
            <Item onClick={handleItemClick}>Sub Item 2</Item>
            </Submenu>
        </Menu>
    )
}