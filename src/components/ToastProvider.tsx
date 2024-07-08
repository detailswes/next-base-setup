"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useSelector((state: RootState) => state);

  console.log(toast, "toast ");

  return <>{children}</>;
};

export default ToastProvider;
