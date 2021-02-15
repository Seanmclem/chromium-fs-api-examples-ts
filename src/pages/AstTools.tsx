import React, { useState } from 'react'
import styled from 'styled-components'
import { BabelFileResult, transform } from '@babel/core'
import tsPlugin from "@babel/plugin-syntax-typescript"
import generate from "@babel/generator"
import template from '@babel/template'
import traverse from "@babel/traverse";
import * as types from "@babel/types";


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

const codeToAstToCode = (code: string, setFinalCode: any) => {
    const babelFileResult = changeCodetoAST(code)
    const newAST = transformAST(babelFileResult)
    const finalCode = changeAstToCode(newAST, babelFileResult)

    setFinalCode(finalCode?.code || '')
    console.log({babelFileResult})
}


const transformAST = (babelFileResult:BabelFileResult | null) => {
    if(!babelFileResult?.ast){
        return undefined
    }
    else {
        const ast = babelFileResult.ast
        traverse(ast, {
            Program(path) { // When the current node is the Program node
                path.pushContainer('body', types.stringLiteral("Hello World")); //types.exportNamedDeclaration()
                // can do more things here.. find docs on babel typed, traverse.
            }
        })
        return ast
    }

}

const changeAstToCode = (newAST: any, babelFileResult: BabelFileResult | null) => {
    if(!babelFileResult?.code){
        return undefined;
    } else {
        const backToCode = generate(
            newAST,
            {
                sourceFileName: "example.tsx",
                filename: "example.tsx",
            },
            babelFileResult.code
        );
        return backToCode;
    }
}

const changeCodetoAST = (code: string) => {
    return transform(code, {
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
                <button onClick={() => codeToAstToCode(codeBlock, setFinalCode)}>
                    {`Code -> AST -> Code`}
                </button>
                {/*
                // TODO: would need a way to store these values temporarily. With like, a wrapping context?
                <button onClick={() => changeCodetoAST()}>
                    {`Code -> AST`}
                </button>
                <button onClick={() => transformAST()}>
                    {`Do Transform`}
                </button>
                <button onClick={() => changeAstToCode()}>
                    {`AST to Code`}
                </button> */}
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