import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Contents = styled.div`
  min-width: 300px;
`;

const Property = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Label = styled.div`
  margin-right: 10px;
  min-width: 70px;
`;
const Value = styled.div``;

interface props {
  fileHandle: FileSystemFileHandle;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Properties: React.FC<props> = ({ fileHandle, setModalOpen }) => {
  const cleanup = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getInfo();
  }, []);
  const [info, setInfo] = useState<any>();
  const getInfo = async () => {
    const file: File = await fileHandle.getFile();
    setInfo({
      type: file.type,
      sizeBytes: file.size.toLocaleString(),
      sizeKiloBytes: (file.size / 1024).toLocaleString(),
      lastModified: new Date(file.lastModified).toDateString(),
    });
  };

  return (
    <Contents id="Contents">
      <Property id="Property">
        <Label id="Label">Name:</Label>
        <Value id="Value">{fileHandle.name}</Value>
      </Property>
      {info && (
        <>
          <Property id="Property">
            <Label id="Label">Type:</Label>
            <Value id="Value">{info.type}</Value>
          </Property>

          <Property id="Property">
            <Label id="Label">Size:</Label>
            <Value id="Value">{info.sizeBytes} Bytes (~{info.sizeKiloBytes} kB)</Value>
          </Property>

          <Property id="Property">
            <Label id="Label">Last Modified:</Label>
            <Value id="Value">{info.lastModified}</Value>
          </Property>
        </>
      )}
    </Contents>
  );
};
