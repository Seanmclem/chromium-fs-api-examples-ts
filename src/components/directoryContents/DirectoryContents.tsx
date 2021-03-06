import React, { useEffect, useState } from "react";
import "./DirectoryContents.scss";
import { FileOrFolderList } from "./components/fileOrFolderList/FileOrFolderList";
import { EntryType, getDirectoryContents } from "../../utils/file-system-utils";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ActionsBar } from "./components/ActionsBar";
import { FolderContextMenu } from "../FolderContextMenu";
import { FileContextMenu } from "../FileContextMenu";

interface Props {
  handleSelectFile?: any;
  altRootHandle?: FileSystemDirectoryHandle;
}

//rename to FileBrowserSidebar

export const DirectoryContents: React.FC<Props> = ({
  handleSelectFile,
  altRootHandle,
}) => {
  const [rootHandle, setRootHandle] = useState<
    FileSystemDirectoryHandle | undefined
  >(undefined);
  const [directoryContents, setDirectoryContents] = useState<EntryType[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

  useEffect(() => {
    altRootHandle && setupFileSystem(altRootHandle);
  }, [altRootHandle]);

  const showFolderPicker = async () => {
    const handle = await window.showDirectoryPicker();
    setupFileSystem(handle);
  };

  const setupFileSystem = async (handle: FileSystemDirectoryHandle) => {
    const contents = await getDirectoryContents(handle);
    setRootHandle(handle);
    setDirectoryContents(contents);
  };

  const refreshFileSystem = () => {
    if (rootHandle) {
      setupFileSystem(rootHandle);
    }
  };

  if (!rootHandle || !directoryContents) {
    return (
      <div className="main-folder-list-container">
        <div className="main-folder-list no-contents">
          <p>No Folder Selected</p>
          <button onClick={showFolderPicker}>Select Root Folder</button>
        </div>
      </div>
    );
  } else if (directoryContents.length === 0) {
    return (
      <div className="main-folder-list-container">
        <div className="main-folder-list no-contents">
          <p>Folder Empty</p>
          <button onClick={showFolderPicker}>Select Root Folder</button>
        </div>
      </div>
    );
  } else {
    return rootHandle ? (
      <>
        {!drawerOpen && (
          <MdKeyboardArrowRight
            style={{ position: "absolute", top: "48%", zIndex: 10 }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          />
        )}
        <div
          className={`main-folder-list-container ${!drawerOpen ? `closed` : ""
            }`}
        >
          <div className="main-folder-list">
            <ActionsBar
              refreshFileSystem={refreshFileSystem}
              setDrawerOpen={setDrawerOpen}
            />
            <div className="folder-name">'{rootHandle.name}' Contents:</div>
            <div className="folder-padding">
              {directoryContents.map((entry) => (
                <FileOrFolderList
                  key={entry[0]}
                  entry={entry[1]}
                  handleSelectFile={handleSelectFile}
                  dirPath={rootHandle.name}
                  parentHandle={rootHandle}
                />
              ))}
            </div>

          </div>
        </div>

        <FolderContextMenu refreshFileSystem={refreshFileSystem} />
        <FileContextMenu refreshFileSystem={refreshFileSystem} />
      </>
    ) : (
      <div>No folder selected</div>
    );
  }
};
