import React from "react"
import styled from "styled-components"

const Contianer = styled.div`
    width: 100%;
    height: auto;
    /* background-color: green; */
    border: 1px solid black;
    border-radius: 10px;
`

interface props {
    selectedFile?: FileSystemHandle;
}

export const ModelViewerPane: React.FC<props> = () => {

    return (
        <Contianer>
            
        </Contianer>
    )
}