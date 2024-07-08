"use client";
import { Button } from "@mui/material";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/theme";

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    cookie.remove("token");
    router.push("/signin");
    toggleTheme('dark');
  };

  return (
    <div>
      <Button color="danger" variant="contained" onClick={handleLogout}>
        logout
      </Button>
    </div>
  );
};

export default Dashboard;
