"use client";
import React from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import EmployeeTab from "../../../Components/EmployeeTab";

// Define your tabs and their labels

const AddEmployyee = () => {
  const TABS = [];

  return (
    <div>
      <HeaderTab
        links={TABS}
        // activeTab={activeTab}
        // setActiveTab={setActiveTab}
        title="Employee"
        barDisplay={true}
      />

      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          <EmployeeTab />
        </div>
      </div>
    </div>
  );
};

export default AddEmployyee;
