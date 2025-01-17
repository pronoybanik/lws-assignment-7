import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBar } from "../../features/Jobs/JobsSlice";

const JobsFilter = ({ setSearching }) => {
  // const dispatch = useDispatch();
  // const [searching, setSearching] = useState("");
  // dispatch(searchBar(searching));

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            onChange={(e) => setSearching(e.target.value)}
          />
        </div>
        <select
          id="lws-sort"
          name="sort"
          autocomplete="sort"
          className="flex-1"
        >
          <option>Default</option>
          <option>Salary (Low to High)</option>
          <option>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default JobsFilter;
