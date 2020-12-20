import React, { useCallback, useState } from "react"
import { DirectoryContents } from "../components/directoryContents/DirectoryContents"
import styled from "styled-components"
import { FileViewerByType } from "../components/FileViewerByType"
import { FileMenu } from "../components/FileMenu"

import {
    Menu,
    Item,
    Separator,
    Submenu,
} from "react-contexify";
  
  import "react-contexify/dist/ReactContexify.css";

  const MENU_ID = "menu-id";


const FileExplorerContainer = styled.div`
    height: 100vh;
`

const InnerStuffContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 95%;
`

function handleItemClick({ event, props, triggerEvent, data } : any){
    console.log(event, props, triggerEvent, data );
  }

export const FileExplorer: React.FC<any> = () => {
    const [altRootHandle, setAltRootHandle] = useState<FileSystemDirectoryHandle| undefined>(undefined)

    const [selectedFile, setSelectedFile] = useState<FileSystemHandle| undefined>(undefined)

    const handleSelectFileCustom = useCallback(async (file: FileSystemFileHandle) => {
        console.log({customFileFn:file})
        setSelectedFile(file)
    }, [])

    return (
        <FileExplorerContainer>
            <FileMenu setAltRootHandle={setAltRootHandle} />
            <InnerStuffContainer>
                <DirectoryContents //needs memoized when sober
                    handleSelectFile={handleSelectFileCustom}
                    altRootHandle={altRootHandle}
                /> 
                {/* move condition into component */}
                {selectedFile && <FileViewerByType fileHandle={selectedFile as FileSystemFileHandle} />}
            </InnerStuffContainer>

            <Menu id={MENU_ID}>
        <Item onClick={handleItemClick}>
          Item 1
        </Item>
        <Item onClick={handleItemClick}>
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
        </FileExplorerContainer>
    )
}