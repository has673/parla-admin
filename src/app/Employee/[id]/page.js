"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import HeaderTab from "../../../../Components/Layout/HeaderTab";
import Sidebar from "../../../../Components/Layout/Sidebar";

const Employee = () => {
  const params = useParams();

  return (
    <div>
      <HeaderTab
        links={[]}
        // activeTab={activeTab}
        // setActiveTab={setActiveTab}
        title="Add Employee"
        barDisplay={false}
      />

      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4"></div>
      </div>
    </div>
  );
};

export default Employee;
