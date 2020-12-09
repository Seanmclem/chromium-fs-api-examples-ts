import React from "react"
import { DirectoryContents } from "../components/directoryContents/DirectoryContents"
import styled from "styled-components"

const ViewerPane = styled.div`
    width: 100%;
    height: auto;
    background-color: red;
`

const FileExplorerContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const FileExplorer: React.FC<any> = () => {
    const handleSelectFileCustom = (file: any) => {
        console.log({customFileFn:file})
    }

    return (
        <FileExplorerContainer>
            <DirectoryContents
                handleSelectFile={handleSelectFileCustom}
            /> 

            <ViewerPane />
            {/* next... make a css grid */}
        </FileExplorerContainer>
    )
}