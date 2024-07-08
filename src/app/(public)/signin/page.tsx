"use client";
import { Button } from "@mui/material";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          cookie.set("token", "resdsdssd");
          router.push("/");
        }}
      >
        login
      </Button>
    </>
  );
};

export default SignIn;
