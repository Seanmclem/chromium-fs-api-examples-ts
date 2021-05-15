import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const setFileTabSaveFunction = useFileStore(state => state.setFileTabSaveFunction)

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
    editorRef.current.addCommand(_monaco.KeyMod.CtrlCmd | _monaco.KeyCode.KEY_S, function () {
      handleSave()
    });
  };

  const { addToast } = useToasts();

  const handleSave = useCallback(async () => {
    const textToSave = editorRef.current?.getValue();
    try {
      if (textToSave) {
        await writeFile(fileTab.fileHandle, textToSave);
        setTextUnmodified(textToSave);
        setHasPendingChanges(fileTab.path, false)
        addToast("Saved file", { appearance: "success" })
      }
    }
    catch (error) {
      console.error('Failed to save file', error)
      addToast("Failed to save file", { appearance: "error" })
    }
  }, [addToast, fileTab.fileHandle, fileTab.path, setHasPendingChanges]);

  useEffect(() => {
    setFileTabSaveFunction(fileTab.path, handleSave)
  }, [fileTab.path, handleSave, setFileTabSaveFunction])


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
  }

  return (
    <ViewerContainer
      isActive={fileTab.isActive}
      style={{
        overflow: "hidden",
        padding: "initial",
      }}
    >
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
