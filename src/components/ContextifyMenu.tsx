import React, { useState } from 'react'
import {
    Menu,
    Item,
    Separator,
    Submenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

import styled from 'styled-components'

const ModalBackdrop = styled.div`
  /* display: none;  */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`


const MENU_ID = "menu-id";



export const ContextifyMenu = () => {

    const [openDirectoryModal, setOpenDirectoryModal] = useState(false)

    const handleItemClick = ({ event, props, triggerEvent, data, action } : any) => {
        console.log({event, props, triggerEvent, data, action} );
        const folderHandle: FileSystemDirectoryHandle = props?.folderHandle;
        setOpenDirectoryModal(!openDirectoryModal)
    }
    
    return (
        <>

        <Menu id={MENU_ID}>
            <Item onClick={(obj) => handleItemClick({...obj, action: "item-1"})}>
                Open modal
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
        
        {openDirectoryModal && <ModalBackdrop id="toots" onClick={() => setOpenDirectoryModal(!openDirectoryModal)}>
            <ModalBody onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
            }}>
            HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA HA
            </ModalBody>
        </ModalBackdrop>}
        
        </>

    )
}