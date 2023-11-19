"use client"
import React, { ReactNode } from 'react';
import { ModalContextState } from './ModalContextProps';
import { useModal } from '@/Hooks/UseModal';

export const ModalContext = React.createContext<ModalContextState>({
  modal: false,
  modalContent: null,
  handleModal: (c?: React.ReactNode | null, cb?: (() => void) | null) => {},
  callBack: null,
});
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { modal, handleModal, modalContent, callBack } = useModal();
  return (
    <ModalContext.Provider
      value={{ modal, handleModal, modalContent, callBack }}
    >
      {children}
    </ModalContext.Provider>
  );
};
