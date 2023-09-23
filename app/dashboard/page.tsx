"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  const logout = async () => {
    await axios.get("/api/logout");
    console.log("logout successfully");
    router.push("/");
  };
  return (
    <div className="w-full min-h-screen grid place-items-center mx-auto">
      Dashboard
      <button onClick={logout} className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3">Logout</button>
    </div>
  );
};

export default Dashboard;
