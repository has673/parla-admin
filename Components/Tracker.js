export const ServiceTracker = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto">
      {/* Step 1 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <div className="h-16 w-16 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full text-[39px]">
            1
          </div>

          <span className="font-normal mt-2 text-center text-[var(--orange)]">
            Customer
          </span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#CDD2DE] mx-2"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center text-[#313131]">
            Service
          </span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#CDD2DE] mx-2"></div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center  text-[#313131">
            Professional
          </span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#CDD2DE] mx-2"></div>
      </div>

      {/* Step 4 (last step, no line after) */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center  text-[#313131">
            Date
          </span>
        </div>
      </div>
    </div>
  );
};
