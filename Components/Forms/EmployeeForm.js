"use client";
import React, { useState } from "react";

const EmployeeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // all fields from all steps here
    name: "",
    email: "",
    phone: "",
    office: "",
    cv: null,
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Submitting:", formData);
    // API submission logic here
  };

  return (
    <div>
      {/* Step Indicator */}
      <div className="mb-6 text-lg font-semibold bg-white">
        {currentStep === 1 && (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white">
            {/* Office */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Office
              </label>
              <select className="w-full border border-[#D8DADC]  text-base font-normal text-[#000000]  rounded-[10px] px-3 py-2">
                <option>Choose</option>
                <option>Office 1</option>
              </select>
            </div>

            {/* Door Number */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Door Number
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Language"
                  className="w-1/2 border border-[#D8DADC] text-base font-normal text-[#000000]  rounded-[10px] px-3 py-2"
                  value="Turkish"
                  readOnly
                />
                <input
                  type="text"
                  placeholder="Numbers"
                  className="w-1/2 border border-[#D8DADC] text-base font-normal text-[#000000]  rounded-[10px] px-3 py-2"
                  value="1224,4564,67"
                  readOnly
                />
              </div>
            </div>

            {/* Payment Day */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Payment Day
              </label>
              <select className="w-full border border-[#D8DADC] text-base font-normal text-[#000000]  rounded-[10px] px-3 py-2">
                <option>Choose</option>
                <option>1st</option>
                <option>15th</option>
              </select>
            </div>

            {/* Commission Percentage */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Commission Percentage
              </label>
              <input
                type="text"
                className="w-full border border-[#D8DADC] text-base font-normal text-[#000000]  rounded-[10px]  px-3 py-2"
                value="40%"
                readOnly
              />
            </div>

            {/* CV File Upload */}

            {/* Monthly Wage Slips */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Monthly Wage Slips
              </label>
              <select className="w-full border border-[#D8DADC]  rounded-[10px] px-3 py-2">
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </form>
        )}
        {currentStep === 2 && (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white">
            {/* Confirmation Date */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Confirmation Date
              </label>
              <input
                type="date"
                className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* Confirmed By */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Confirmed By
              </label>
              <select className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2">
                <option>Name lastname</option>
                <option>Office 1</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* Resignation Date */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Resignation date
              </label>
              <input
                type="date"
                className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* Last Day to Work */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                last day to work
              </label>
              <input
                type="date"
                className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* ID Upload (Front + Back) */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                ID (Front and back photo)
              </label>
              <input
                type="file"
                accept="application/pdf,image/*"
                className="w-full border border-[#D8DADC] text-sm font-normal text-[#000000] rounded-[10px] px-3 py-2 bg-white file:mr-3 file:py-1 file:px-3 file:rounded file:border-none file:bg-[#f4f4f4] file:text-sm"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                CV
              </label>
              <input
                type="file"
                accept="application/pdf"
                className="w-full border border-[#D8DADC] text-sm font-normal text-[#000000] rounded-[10px] px-3 py-2 bg-white file:mr-3 file:py-1 file:px-3 file:rounded file:border-none file:bg-[#f4f4f4] file:text-sm"
              />
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white">
            {/* Emergency Contact */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Emergency Contact
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full border border-[#D8DADC] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Phone
              </label>
              <input
                type="text"
                className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Start Date
              </label>
              <input
                type="text"
                value="01-01-12024"
                className="w-full border border-[#D8DADC] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* Resignation Date */}
            <div>
              <label className="block text-sm font-normal text-[#000000] mb-1">
                Resignation Date
              </label>
              <input
                type="text"
                value="01-01-12024"
                className="w-full border border-[#D8DADC] rounded-[10px] px-3 py-2"
              />
            </div>

            {/* Item Name */}
            <div className="flex w-full gap-4">
              {/* Item Name */}
              <div className="w-1/2">
                <label className="block text-sm font-normal text-[#000000] mb-1">
                  Item Name
                </label>
                <input
                  type="text"
                  className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2"
                />
              </div>

              {/* Item Code */}
              <div className="w-1/2">
                <label className="block text-sm font-normal text-[#000000] mb-1">
                  Item Code
                </label>
                <input
                  type="text"
                  className="w-full border border-[#D8DADC] text-base font-normal text-[#000000] rounded-[10px] px-3 py-2"
                />
              </div>
            </div>
          </form>
        )}
        {/* Navigation Buttons */}
        <div className="flex justify-end mt-6">
          {/* Show "Next" for Step 1 and Step 2 */}
          {currentStep < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-[var(--orange)] text-white rounded-[10px]"
            >
              Next
            </button>
          )}

          {/* Show "Submit" only on Step 3 */}
          {currentStep === 3 && (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-2 bg-[var(--orange)] text-white rounded-[10px]"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
