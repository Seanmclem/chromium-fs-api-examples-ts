import React, { useState } from 'react'
import styled from 'styled-components'
import { transform } from '@babel/core'
import tsPlugin from "@babel/plugin-syntax-typescript"
import generate from "@babel/generator"

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

const codtToAstToCode = (code: string, setFinalCode: any) => {
   const astEtc = transform(code, {
        ast: true,
        babelrc: false,
        plugins: [
            [
                tsPlugin,
                {
                    "isTSX": true,
                    allExtensions: true,
                }
            ]
        ],
        filename: "example.tsx"
    });

    if(astEtc?.ast && astEtc?.code){
        const backToCode = generate(
            astEtc.ast,
            {
              sourceFileName: "example.tsx",
              filename: "example.tsx",
            },
            astEtc.code
          );
          setFinalCode(backToCode.code)
    }
}

export const AstTools: React.FC<{}> = ({}) => {
    const codeBlock = originalFiles.hasJSXcomponent;
    const [finalCode, setFinalCode] = useState("");

    return (
        <ASTtoolsContainer>
            {/* <TopBar>
                <div>Mode: </div>
                <button>
                    {`Text -> AST -> Text`}
                </button>
            </TopBar> */}
            <TopBar>
                <div>Run: </div>
                <button onClick={() => codtToAstToCode(codeBlock, setFinalCode)}>
                    {`Code -> AST -> Code`}
                </button>
            </TopBar>
            <ColumnsContainer>
                <Column>
                    {codeBlock}
                </Column>
                <Column>
                    {finalCode}
                </Column>
            </ColumnsContainer>
        </ASTtoolsContainer>
    )
} 