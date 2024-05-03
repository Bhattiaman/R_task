// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './JobCard';
import Filter from './Filter';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Fetch initial job listings
    fetchJobs(0);
  }, []);
  const fetchJobs = (offset) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({
      "limit": 10,
      "offset": offset
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body
    };
  
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data); // Log API response for debugging
        if (!Array.isArray(data.jobs)) {
          throw new Error('Invalid jobs data');
        }
        // Update jobs state with fetched data
        setJobs(prevJobs => [...prevJobs, ...data.jobs]);
        // Update hasMore state based on totalCount
        setHasMore(prevHasMore => prevHasMore && (jobs.length + data.jobs.length < data.totalCount));
      })
      .catch(error => console.error(error));
  }
  
  const loadMoreJobs = () => {
    // Fetch additional job listings
    const offset = jobs.length;
    fetchJobs(offset);
  }

  return (
    <div className="app">
      <Filter />
      <InfiniteScroll
        dataLength={jobs.length}
        next={loadMoreJobs}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more jobs to load</p>}
      >
        {jobs.map(job => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
            experience={job.experience}
            applyLink={job.applyLink}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
