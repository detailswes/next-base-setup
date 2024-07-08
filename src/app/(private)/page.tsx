"use client";
import { Button } from "@mui/material";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/theme";
import { useGetAccountQuery } from "@/features/auth";

const Dashboard = () => {
  const router = useRouter();
  const { data } = useGetAccountQuery("");

  console.log(data,"data");

  const handleLogout = () => {
    cookie.remove("token");
    router.push("/signin");
    toggleTheme("dark");
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleLogout}>
        logout
      </Button>
    </div>
  );
};

export default Dashboard;
