import React, { useEffect, useRef, useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import monaco from 'monaco-editor'
import {
  getTextFileContents,
  writeFile,
} from "../../../utils/file-system-utils";
import { editor } from "monaco-editor";
import { ViewerContainer } from "../../FileViewerByType";
import { FileTab, useFileStore } from "../../../stores/fileStore";
import { useToasts } from "react-toast-notifications";

interface props {
  fileTab: FileTab;
}

export const TextFileViewer: React.FC<props> = ({ fileTab }) => {
  const setHasPendingChanges = useFileStore(state => state.setHasPendingChanges)


  useEffect(() => {
    fileUnmodifiedTextToState()
  }, [])
  const fileUnmodifiedTextToState = async () => {
    const fileText = await getTextFileContents(fileTab.fileHandle);
    setTextUnmodified(fileText);
  };
  const [textUnmodified, setTextUnmodified] = useState<string>("");

  const [text, setText] = useState<string>(""); // dafuq, do I need this for? needs better
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    _monaco: Monaco
  ) => {
    editorRef.current = editor;
  };

  const { addToast } = useToasts();
  const handleSave = async () => {
    const textToSave = editorRef.current?.getValue();
    try {
      if (textToSave) {
        await writeFile(fileTab.fileHandle, textToSave);
        setTextUnmodified(textToSave);
        addToast("Saved file", { appearance: "success" })
      }
    }
    catch (error) {
      console.error('Failed to save file', error)
      addToast("Failed to save file", { appearance: "error" })
    }
  };

  useEffect(() => {
    fileTextToState(fileTab.fileHandle);
  }, [fileTab.fileHandle]);

  const fileTextToState = async (fileHandle: FileSystemFileHandle) => { // needs refactor of somekind
    const fileText = await getTextFileContents(fileHandle);
    setText(fileText);
  };

  const handleEditorChange = (value: string | undefined, _event: monaco.editor.IModelContentChangedEvent) => {
    const hasChanges = value !== textUnmodified
    setHasPendingChanges(fileTab.path, hasChanges)
    console.log('hasChanges', hasChanges) // broaddcast to zustand when a tab hasPendingChanges
    console.log('Text change')
  }

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
          defaultValue={text}
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
        />
      ) : null}
      {/* no language="anything", gives basic default text editor, should use primarily at first */}
    </ViewerContainer>
  );
};
