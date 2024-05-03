// App.js

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/actions";
import JobCard from "./JobCard";
import FilterPanel from "./FilterPanel";
import InfiniteScroll from "./InfiniteScroll";

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": offset
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Dispatch action to update jobs state
        dispatch(fetchJobs(data.jobs));
      })
      .catch((error) => console.error(error));
  }, [dispatch, offset]);

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + 10);
  };

  return (
    <div className="app">
      <h1>Candidate Application Platform</h1>
      <FilterPanel />
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <InfiniteScroll loadMore={loadMore} />
      </div>
    </div>
  );
};

export default App;
