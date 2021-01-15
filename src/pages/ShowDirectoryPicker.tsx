import * as React from "react";
import { useState, useEffect } from "react";

const FileContents = ({ value }: { value?: string }) => {
    useEffect(() => {
        if(value){
            setText(value)
        }
    }, [value])

    const [text, setText] = useState<string>("");


    return value ? (
        <div>
        <textarea
            name="file"
            value={text}
            rows={40}
            cols={40}
        />
        </div>
    ) : null;
};

const getTextFileContents = async (fileHandle: FileSystemFileHandle) => {
  const file: File = await fileHandle.getFile();
  const fileText: string = await file.text();
  return fileText;
};

export const writeFile = async (
    fileHandle: FileSystemFileHandle, 
    contents: FileSystemWriteChunkType
) => {
    const writer = await fileHandle.createWritable();
    await writer.truncate(0);// Make sure we start with an empty file
    await writer.write(contents);
    await writer.close();
    return fileHandle;
}

export const ShowDirectoryPicker = () => {
  const [text, setText] = useState<string>("");
  const [fileHandle, setFileHandle] = useState<
    FileSystemFileHandle | undefined
  >(undefined);

  const fileTextToState = async (fileHandle: FileSystemFileHandle) => {
    const fileText = await getTextFileContents(fileHandle);
    setText(fileText);
  };

  const handleOpenFile = async () => {
    const handles = await window.showOpenFilePicker();
    if(handles?.length && handles[0]){
        setFileHandle(handles[0]);
        fileTextToState(handles[0]);
    }
  };

  const handleAddComponent = async () => {
    if(text && fileHandle){
        let newText = text;
        newText = text.replace("{/*PHRASE*/}",`{/*PHRASE*/}
<InjectedComponent/>`)
        const newFileHandle = await writeFile(fileHandle, newText);
        setFileHandle(newFileHandle);
        fileTextToState(newFileHandle);
    }
  };

  return (
    <div className="App">
      <h1>File stuff</h1>
      <button onClick={handleOpenFile}>Open File</button>
      {fileHandle && <button onClick={handleAddComponent}>Add component, save file</button>}
      <FileContents value={text} />
    </div>
  );
}
