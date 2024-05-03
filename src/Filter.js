// Filter.js

import React, { useState } from 'react';

const Filter = () => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remoteOnSite, setRemoteOnSite] = useState('');
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleFilter = () => {
    // Implement filter logic here
    console.log("Filtered!");
  }

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Minimum Experience"
        value={minExperience}
        onChange={(e) => setMinExperience(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        value={remoteOnSite}
        onChange={(e) => setRemoteOnSite(e.target.value)}
      >
        <option value="">Remote/On-Site</option>
        <option value="remote">Remote</option>
        <option value="onsite">On-Site</option>
      </select>
      <input
        type="text"
        placeholder="Tech Stack"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        placeholder="Minimum Base Pay"
        value={minBasePay}
        onChange={(e) => setMinBasePay(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );    
}

export default Filter;
