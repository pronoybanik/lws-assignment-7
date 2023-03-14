import React from "react";
import JobsFilter from "../../componet/JobsFilter/JobsFilter";
import JobsList from "../../componet/JobsList/JobsList";


const Home = () => {
  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <JobsFilter></JobsFilter>

        <JobsList></JobsList>
      </main>
    </div>
  );
};

export default Home;
