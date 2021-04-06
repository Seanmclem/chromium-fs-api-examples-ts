import React, { useCallback, useEffect, useState } from "react";
import "./FileItem.scss";
import { FileIcon } from "./components/fileIcon/FileIcon";
import { useContextMenu } from "react-contexify";
import { FILE_MENU_ID } from "../../enums";
import { HighlightedService } from "../../../../services/HighlightedService";

import { openTabs } from "../../../../stores/openTabsStore";

interface Props {
  entry: FileSystemFileHandle;
  handleSelectFile?: any;
  dirPath?: string;
  parentHandle: FileSystemDirectoryHandle;
}

//do something here and there .... removED global/prop-drill handleSelectFile()

export const FileItem: React.FC<Props> = ({
  entry: fileHandle,
  dirPath,
  parentHandle,
}) => {
  const [specificPath] = useState(`${dirPath}/${fileHandle.name}`);

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [subscription, setSubscription] = useState<any | undefined>(undefined);

  useEffect(() => {
    return () => {
      subscription?.unsubscribe?.();
      setSubscription(undefined);
    };
  }, []);

  const subscribeHighlightFolder = () => {
    const sub = HighlightedService.getItem().subscribe((folder) => {
      if (folder?.path === specificPath) {
        setIsHighlighted(true);
        setSubscription(sub);
      } else {
        setIsHighlighted(false);
        sub.unsubscribe();
        setSubscription(undefined);
      }
    });
  };

  const depth = (dirPath?.split("/").length || 0) - 1 || 0;

  const { show: showContextMenu } = useContextMenu({ id: FILE_MENU_ID });
  const handleRigthClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    showContextMenu(event, {
      id: FILE_MENU_ID,
      props: { fileHandle, parentHandle },
    });
    subscribeHighlightFolder();
    HighlightedService.setItem({ path: specificPath, handle: fileHandle });
  };

  const handleSelectFileDefault = (file: FileSystemFileHandle) => {
    console.log("file-selected ->", { file });
    openTabs?.tabs?.push({
      name: fileHandle.name,
      path: specificPath,
      fileHandle: fileHandle,
    });
    console.log("open tabs", openTabs?.tabs);  };

  return (
    <div
      className={`file-item ${isHighlighted ? "context-click" : ""}`}
      key={fileHandle.name}
      onClick={() => handleSelectFileDefault(fileHandle)}
      style={{
        paddingLeft: `${depth * 15}px`,
        paddingRight: `${depth * 15}px`,
      }}
      onContextMenu={handleRigthClick}
    >
      <FileIcon filename={fileHandle.name} />
      <div>{fileHandle.name}</div>
    </div>
  );
};
