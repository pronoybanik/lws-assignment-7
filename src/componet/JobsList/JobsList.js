import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/Jobs/JobsSlice";
import JobItem from "./JobItem";

const JobsList = () => {
  const dispatch = useDispatch();

  const { jobData, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  console.log(jobData);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError) content = <p className="error">{error}</p>;

  if (!isLoading && !isError && jobData?.length > 0) {
    content = jobData.map((data) => (
      <JobItem key={data.id} data={data}></JobItem>
    ));
  }

  if (!isLoading && !isError && jobData?.length === 0) {
    content = <p>No jobs found!</p>;
  }

  return <div className="jobs-list">{content}</div>;
};

export default JobsList;
