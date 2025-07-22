"use client";
import React, { useState, useEffect } from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/Context/userContext";

import ReactPaginate from "react-paginate";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Loader } from "./Loader";

const EmployeeTab = () => {
  const router = useRouter();
  const { token } = useUser();
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState(null); // ← start with null instead of []
  const [count, setCount] = useState(0);

  const itemsPerPage = 5;
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    hasMore: false,
  });

  const pageCount = pagination?.totalPages;

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;

    getEmployees(selectedPage);
  };

  const getEmployees = async (page = 1) => {
    try {
      setLoading(true);
      const query = new URLSearchParams({
        limit: itemsPerPage,
        page,
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Admin/Employee/getAllEmployee?${query}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = await response.json();

      setEmployees(data.data.employees);
      setCount(data.data.totalEmployees);

      setPagination(data.pagination); // Save pagination info
    } catch (err) {
      console.error("Failed to fetch services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getEmployees();
    }
  }, [token]);

  return (
    <div className="px-8">
      <h2 className="text-[#1D1B1B] text-xl font-semibold">
        {` All From A-Z (${count})`}
      </h2>

      <div className="flex justify-center items-center  w-full">
        <div className="grid grid-cols-3 gap-7 w-full ">
          {/* Headings */}
          <div className="font-medium text-[#1E232C] text-2xl">First Name</div>
          <div className="font-medium text-[#1E232C] text-2xl">Last Name</div>
          <div className="font-medium text-[#1E232C] text-2xl">Contact</div>

          {loading ? (
            <Loader />
          ) : employees && employees.length > 0 ? (
            employees.map((employee) => (
              <React.Fragment key={employee._id}>
                <div className="text-[#4C4D4F] text-sm font-bold">
                  {employee.firstName}
                </div>
                <div className="text-[#4C4D4F] text-sm font-bold">
                  {employee.lastName}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#E1E1E1] hover:bg-[var(--orange)] flex justify-center items-center rounded-full cursor-pointer">
                    <MessageSquare className="w-4 h-4 text-[var(--orange)] hover:text-white" />
                  </div>
                  <div className="w-7 h-7 bg-[#E1E1E1] hover:bg-[var(--orange)] flex justify-center items-center rounded-full cursor-pointer">
                    <PhoneCall className="w-4 h-4 text-[var(--orange)] hover:text-white" />
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No employees found.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-end">
        {" "}
        <ReactPaginate
          breakLabel="..."
          nextLabel=<ArrowBigRight color="#ff6b00" />
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel=<ArrowBigLeft color="#ff6b00" />
          renderOnZeroPageCount={null}
          containerClassName="flex mt-4 gap-2 cursor-pointer"
          pageClassName="px-3 py-1 border border-gray-300 rounded "
          previousClassName="mt-1 "
          nextClassName="mt-1"
          activeClassName="bg-[#ff6b00] "
        />
      </div>

      <div className="w-full flex justify-end">
        {" "}
        <button
          type="button"
          onClick={() => {
            router.push("/AddEmployee");
          }}
          className="px-6 py-2 bg-[var(--orange)] text-white rounded-[10px] my-5"
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeTab;
