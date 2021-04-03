import React, { useState } from "react";
import { Menu, Item, Separator, Submenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { FOLDER_MENU_ID } from "./directoryContents/enums";

import { ModalReady } from "./ModalReady";
import { DirectoryCreator } from "./modals/DirectoryCreator";
import { FileCreator } from "./modals/FileCreator";
import { HighlightedService } from "../services/HighlightedService";
import { useToasts } from "react-toast-notifications";

enum Actions {
  NewFolder = "new-folder",
  NewFile = "new-file",
  DeleteFolder = "delete-folder",
}

interface props {
  refreshFileSystem: () => void;
}

export const FolderContextMenu: React.VFC<props> = ({ refreshFileSystem }) => {
  const { addToast } = useToasts();
  const [directoryHandle, setDirectoryHandle] = useState<
    FileSystemDirectoryHandle | undefined
  >(undefined);

  const [createFileModalOpen, setCreateFileModalOpen] = useState<boolean>(
    false
  );
  const [
    createDirectoryModalOpen,
    setCreateDirectoryModalOpen,
  ] = useState<boolean>(false);

  const handleItemClick = ({
    event,
    props,
    triggerEvent,
    data,
    action,
  }: any) => {
    console.log({ event, props, triggerEvent, data, action });
    const folderHandle: FileSystemDirectoryHandle = props?.folderHandle; // passed from FolderItem.tsx
    const parentDirecoryHandle: FileSystemDirectoryHandle = props?.parentHandle;

    setDirectoryHandle(folderHandle);

    if (action === Actions.NewFolder) {
      setCreateDirectoryModalOpen(true);
    } else if (action === Actions.NewFile) {
      setCreateFileModalOpen(true);
    } else if (action === Actions.DeleteFolder) {
      deleteDirectory({ parentDirecoryHandle, folderHandle });
    }
  };

  const deleteDirectory = async ({
    parentDirecoryHandle,
    folderHandle,
  }: {
    parentDirecoryHandle: FileSystemDirectoryHandle;
    folderHandle: FileSystemDirectoryHandle;
  }) => {
    try {
      await parentDirecoryHandle.requestPermission({ mode: "readwrite" });
      await folderHandle.requestPermission({ mode: "readwrite" });
      await parentDirecoryHandle.removeEntry(folderHandle.name, {
        recursive: true,
      });
      refreshFileSystem();
      addToast("Deleted directory", { appearance: "success" });
    } catch (error) {
      console.error("Failed to delete directory", error);
      addToast("Failed to delete directory", { appearance: "error" });
    }
  };

  const onCloseMenu = () => {
    HighlightedService.clearItem();
  };

  const onCloseModal = () => {
    setDirectoryHandle(undefined);
    setCreateFileModalOpen(false);
    setCreateDirectoryModalOpen(false);
  };

  return (
    <>
      <Menu id={FOLDER_MENU_ID} onHidden={onCloseMenu}>
        <Item
          onClick={(obj) =>
            handleItemClick({ ...obj, action: Actions.NewFolder })
          }
        >
          New Directory
        </Item>
        <Item
          onClick={(obj) =>
            handleItemClick({ ...obj, action: Actions.NewFile })
          }
        >
          New File
        </Item>
        <Item
          onClick={(obj) =>
            handleItemClick({ ...obj, action: Actions.DeleteFolder })
          }
        >
          Delete
        </Item>
        {/* <Separator />
                <Item disabled>Disabled</Item>
                <Separator />
                <Submenu label="Submenu">
                <Item onClick={handleItemClick}>
                    Sub Item 1
                </Item>
                <Item onClick={handleItemClick}>Sub Item 2</Item>
                </Submenu> */}
      </Menu>

      {createDirectoryModalOpen && directoryHandle && (
        <ModalReady onCloseModal={onCloseModal}>
          <DirectoryCreator
            directoryHandle={directoryHandle}
            setCreateDirectoryModalOpen={setCreateDirectoryModalOpen}
            refreshFileSystem={refreshFileSystem}
          />
        </ModalReady>
      )}

      {createFileModalOpen && directoryHandle && (
        <ModalReady onCloseModal={onCloseModal}>
          <FileCreator
            directoryHandle={directoryHandle}
            setCreateFileModalOpen={setCreateFileModalOpen}
          />
        </ModalReady>
      )}
    </>
  );
};
