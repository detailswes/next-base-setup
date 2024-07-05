"use client";
import { Button } from "@mui/material";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    cookie.remove("token");
    router.push("/signin");
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
