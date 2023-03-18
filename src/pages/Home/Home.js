import React from "react";
import JobsFilter from "../../componet/JobsFilter/JobsFilter";
import JobsList from "../../componet/JobsList/JobsList";

const Home = ({ setSearching, searching }) => {
  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <JobsFilter setSearching={setSearching}></JobsFilter>

        <JobsList searching={searching}></JobsList>
      </main>
    </div>
  );
};

export default Home;
