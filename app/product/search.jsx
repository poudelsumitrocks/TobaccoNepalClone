"use client";

import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search({ search, setSearch, sort, setSort }) {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);

  // Trigger search button / Enter
  const handleSearch = () => {
    const query = new URLSearchParams({
      search: search || "",
      // sort: sort,
    
    }).toString();

    router.push(`/product?${query}`, { scroll: false });
  };

  // Trigger sort change
  const handleSortChange = (newSort) => {
    setSort(newSort);       
    setDropdown(false);

    const query = new URLSearchParams({
      sort: newSort,
    }).toString();

    router.push(`/product?${query}`, { scroll: false });
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <CiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by product name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}  // ✅ only search
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <div className="search-btn" onClick={handleSearch}>
          Search
        </div>
      </div>

      <div className="filter-btn">
        <IoFilter className="filter-icon" size={20} />
        <div className="learn">
          {/* <h1 className="learn-header" onClick={() => setDropdown(!dropdown)}>
            {sort === "latest" ? "Oldest" : "Latest"}
            <IoIosArrowDown className="learn-icon" size={16} />
          </h1> */}
          <h1 className="learn-header"onClick={() => setDropdown(!dropdown)}>
  {sort === "latest" ? "Latest" : "Oldest"}
  <IoIosArrowDown className="learn-icon" size={16} />
</h1>


          {dropdown && (
            <div className="absolute top-full left- lg:left-[-46] mt-2 w-72 lg:w-36 bg-[#211f1b] text-white rounded-lg border border-[#eab308]/80 p-1 lg:p-2 z-10 shadow-lg">
              <ul className="flex flex-col gap-2">
                <li
                  className="px-2 py-2 cursor-pointer rounded-lg hover:bg-[#eab308]"
                  onClick={() => handleSortChange("latest")}
                >
                  Latest
                </li>
                <li
                  className="px-2 py-2 cursor-pointer rounded-lg hover:bg-[#eab308]"
                  onClick={() => handleSortChange("oldest")}
                >
                  Oldest
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
