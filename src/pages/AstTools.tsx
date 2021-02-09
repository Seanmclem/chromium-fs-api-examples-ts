import React from 'react'
import styled from 'styled-components'
import { transform } from '@babel/standalone'
import typestuff from "@babel/preset-typescript"

const originalFiles = {
    blank: ``,
    hasImport: `import React from 'react';`,
    hasJSXcomponent: `import React from 'react'
    export const AstTools: React.FC<{}> = ({}) => {
    return (
        <div>
            AST tools
        </div>
    )
} `
}

const ASTtoolsContainer = styled.div``

const TopBar = styled.div`
    display: flex;  
    align-items: center;
    width: auto;
    height: 30px;
    border: 1px solid gray;
    margin: 2px 10px 10px 10px;
    padding: 10px;
`

const ColumnsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    width: 50%;
    border: 1px solid black;
    margin: 5px 10px;
    padding: 10px;
    white-space: pre;
    overflow-x: auto;
`

const parseTheShit = (code: string) => {
    debugger
   const hat = transform(code, {
        ast: true,
        babelrc: false,
        presets: [typestuff],
        filename: "example.tsx"
    });
    debugger;
    // const myCode = parse(code);
    // debugger;
    // console.log({myCode})
}

export const AstTools: React.FC<{}> = ({}) => {
    const codeBlock = originalFiles.hasJSXcomponent;

    return (
        <ASTtoolsContainer>
            <TopBar>
                <div>Mode: </div>
                <button>
                    {`Text -> AST -> Text`}
                </button>
            </TopBar>
            <TopBar>
                <div>Run: </div>
                <button onClick={() => parseTheShit(codeBlock)}>
                    {`Text -> AST`}
                </button>
            </TopBar>
            <ColumnsContainer>
                <Column>
                    {codeBlock}
                </Column>
                <Column> moar column stuff</Column>
            </ColumnsContainer>
        </ASTtoolsContainer>
    )
} 