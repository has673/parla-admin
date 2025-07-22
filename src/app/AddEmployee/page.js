"use client";
import React from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import EmployeeForm from "../../../Components/Forms/EmployeeForm";

// Define your tabs and their labels

const AddEmployyee = () => {
  const TABS = [];

  return (
    <div>
      <HeaderTab
        links={TABS}
        // activeTab={activeTab}
        // setActiveTab={setActiveTab}
        title="Add Employee"
        barDisplay={false}
      />

      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          <EmployeeForm />
        </div>
      </div>
    </div>
  );
};

export default AddEmployyee;
