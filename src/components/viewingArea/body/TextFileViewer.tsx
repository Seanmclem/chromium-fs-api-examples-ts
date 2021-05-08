import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import {
  getTextFileContents,
  writeFile,
} from "../../../utils/file-system-utils";
// import ts from "typescript"
import { editor } from "monaco-editor";
import { ViewerContainer } from "../../FileViewerByType";
import { FileTab } from "../../../stores/fileStore";

interface props {
  fileTab: FileTab;
}

export const TextFileViewer: React.FC<props> = ({ fileTab }) => {
  const [text, setText] = useState<string>("");
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  const handleEditorDidMount = (
    _getEditorValue: () => string,
    editor: editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
  };

  const handleSave = () => {
    const textToSave = editorRef.current?.getValue();
    textToSave && writeFile(fileTab.fileHandle, textToSave);
  };

  useEffect(() => {
    fileTextToState(fileTab.fileHandle);
  }, [fileTab.fileHandle]);

  const fileTextToState = async (fileHandle: FileSystemFileHandle) => {
    const fileText = await getTextFileContents(fileHandle);
    setText(fileText);
    // debugger;
    // const test = ts.createSourceFile('boo.txt', fileText, ts.ScriptTarget.JSON)
    // debugger
    // console.log('test', test)
    // crazy AST parsed from text
    //need to test turning back to a file
    // then understand any and modify it
  };

  return (
    <ViewerContainer
      isActive={fileTab.isActive}
      style={{
        overflow: "hidden",
        padding: "initial",
      }}
    >
      <button onClick={handleSave}>SAVE</button>
      {text ? (
        <Editor
          height="100%"
          value={text}
          editorDidMount={handleEditorDidMount}
        />
      ) : null}
      {/* no language="anything", gives basic default text editor, should use primarily at first */}
    </ViewerContainer>
  );
};
