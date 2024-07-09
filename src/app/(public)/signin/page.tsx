"use client";
import { setToast } from "@/features/toast";
import { Button } from "@mui/material";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => {
          cookie.set("token", "resdsdssd");
          router.push("/");
          dispatch(setToast({ message: "Login Successful", type: "success" }));
        }}
      >
        login
      </Button>
    </>
  );
};

export default SignIn;
