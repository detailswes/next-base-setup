"use client";
import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RootState } from "@/store";
import Snackbar from "@mui/material/Snackbar";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { setToast } from "@/features/toast";

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { toast } = useSelector(
    (state: RootState) => ({
      toast: state.toast,
    }),
    shallowEqual
  );

  const theme = useTheme();

  const handleClose = () => {
    dispatch(setToast({ message: "", type: "" }));
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
        onClose={handleClose}
        open={toast.message ? true : false}
      >
        <Box
          sx={{
            padding: "15px !important",
            backgroundColor:
              toast.type === "success"
                ? theme.palette.success.dark
                : theme.palette.error.main,
            color: theme.palette.TypographySecondry.light,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "8px",
            gap: "10px",
            fontSize: "16px",
            minWidth: "300px",
            maxWidth: "400px",
          }}
        >
          <Box>{toast.message}</Box>

          <CloseIcon onClick={handleClose} />
        </Box>
      </Snackbar>
      {children}
    </>
  );
};

export default ToastProvider;
