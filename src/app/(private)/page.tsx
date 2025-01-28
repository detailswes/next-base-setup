"use client";
import { Button } from "@mui/material";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/theme";
import { useGetAccountQuery } from "@/features/auth";

const Dashboard = ( ) => {
  const router = useRouter();
  const { data } = useGetAccountQuery();



  const handleLogout = () => {
    cookie.remove("token");
    router.push("/signin");
    toggleTheme("dark");
  };

  return (
    <div>
      {JSON.stringify(data)}
      <Button color="primary" onClick={handleLogout} variant="contained">
        logout
      </Button>
      <CompA lol="dsdsd" />
    </div>
  );
};

const CompA = ({lol}:{lol:string})=>{
  return <div>CompA{lol}</div>
}

export default Dashboard;
