import React, { useContext } from "react";
import { Box, Modal as MuiModaL, Paper } from "@mui/material";
import { ModalContext } from "../Providers/ModalContext/ModalContext";

export const Modal = () => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);
  const contentProps = {
    ...(typeof modalContent === "string" ? {} : { handleModal }),
  };

  return (
    <MuiModaL onClose={() => handleModal()} open={modal}>
      <Paper sx={style}>
        {React.isValidElement(modalContent)
          ? React.cloneElement(modalContent, {
              ...modalContent.props,
              ...contentProps,
            })
          : modalContent}
      </Paper>
    </MuiModaL>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  borderRadius: "8px",
  padding: "16px",

  "@media (max-width: 600px)": {
    minWidth: "90vw",
    width: "auto",
  },
};
