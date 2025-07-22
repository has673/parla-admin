"use client";
import Image from "next/image";
import { Search, SlidersHorizontal } from "lucide-react";
// import SidebarModal from "../Modals/SidebarModal";

export default function HeaderTab({
  links,
  activeTab,
  setActiveTab,
  title,
  barDisplay = true,
}) {
  return (
    <header
      className="flex flex-col md:flex-row justify-between p-4 py-0 border-b border-b-[#ECEAEA] bg-white w-full gap-y-2 md:gap-y-0"
      style={{
        boxShadow: " 0px 4px 4px 0px #00000040",
      }}
    >
      {/* Logo Section */}
      <div className="flex md:flex-row justify-center flex-col py-3">
        <div className="flex items-center md:flex-row flex-col gap-2">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <span className="font-bold md:text-2xl text-lg text-[#656565]">
            PARLA
          </span>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex-1 flex flex-row justify-between items-center  md:px-6 overflow-x-auto md:mx-14">
        <h3 className="text-[#202224] md:text-xl text-sm font-semibold md:py-3">
          {title}
        </h3>

        <nav>
          <ul className="flex flex-row md:gap-x-3 list-none font-medium md:text-base text-xs cursor-pointer text-black">
            {links.map(({ path, label }) => (
              <li key={path} className="h-full flex">
                <button
                  onClick={() => setActiveTab(path)}
                  className={`px-2 border-b-3 focus:outline-none  ${
                    activeTab === path
                      ? "border-[var(--orange)] text-[var(--orange)] pb-2"
                      : "border-transparent"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {barDisplay === true && (
          <div className="flex items-center bg-[#EFEFEF] rounded-[18px] overflow-hidden  h-17 ">
            {/* Search Icon & Input */}
            <div className="flex items-center px-3">
              <Search className="w-8 h-8 text-[var(--orange)]" />
              <input
                type="text"
                placeholder="Search address, or near you"
                className="bg-transparent outline-none px-2 py-2 text-base text-[#3F3F3FE5]"
              />
            </div>

            {/* Filter Button */}
            <button className="bg-[var(--orange)] p-2 rounded-[10px] transition-all duration-200  h-17 w-21  flex justify-center items-center">
              <SlidersHorizontal className="w-4 h-4 text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Icons Section 
      <div className="flex md:items-center gap-6 justify-center ">
        <div className="relative md:w-6 md:h-6 w-4 h-4 ">
          <Image
            src="/images/search.png"
            alt="Search"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-6 md:h-6 w-4 h-4">
          <Image
            src="/images/chat.png"
            alt="Messages"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-6 md:h-6 w-4 h-4">
          <Image
            src="/images/bell.png"
            alt="Notifications"
            fill
            className="cursor-pointer object-cover"
            onClick={() => (window.location.href = "/Notification")}
          />
        </div>

        <Image
          src="/images/menu.png"
          alt="menu"
          width={24}
          height={24}
          className="hidden md:block cursor-pointer object-cover"
        />

        <div className="md:hidden">
          <SidebarModal />
        </div>
      </div>
      */}
    </header>
  );
}
