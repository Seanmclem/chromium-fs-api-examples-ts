import React, { ReactChildren } from 'react'

import styled from 'styled-components'

const ModalBackdrop = styled.div`
  /* display: none;  */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`
interface props {
    children: any,
    onCloseModal: any,
}

export const ModalReady: React.FC<props> = ({ children, onCloseModal }) => {

    const preventCloseModal = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <ModalBackdrop className="modal-backdrop" onClick={onCloseModal}>
            <ModalBody onClick={preventCloseModal}>
                { children }
            </ModalBody>
        </ModalBackdrop>
    )
}