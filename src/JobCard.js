// JobCard.js

import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Description: {job.description}</p>
      <p>Experience: {job.experience}</p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
